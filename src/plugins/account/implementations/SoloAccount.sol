// SPDX-License-Identifier: MIT

pragma solidity 0.8.19;

import {C} from "src/libraries/C.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IWETH9} from "src/interfaces/external/IWETH9.sol";
import {Account} from "../Account.sol";
import {LibUtilsPublic} from "src/libraries/LibUtilsPublic.sol";
import {LibUtils} from "src/libraries/LibUtils.sol";

contract SoloAccount is Account {

    struct Asset {
        address addr;
        uint8 decimals;
    }

    struct Parameters {
        address owner;
        bytes32 salt;
    }

    mapping(bytes32 => mapping(address => uint256)) private unlockedBalances;

    constructor(address bookkeeperAddr) Account(bookkeeperAddr) {}

    function _transferAsset(Asset memory asset, address from, address to, uint256 amount) private {
        if (from == address(this)) {
            require(IERC20(asset.addr).transfer(to, amount), "Transfer failed");
        } else {
            require(IERC20(asset.addr).transferFrom(from, address(this), amount), "Transfer failed");
        }
    }

    function _loadFromUser(Asset memory asset, uint256 amount, bytes memory parameters) internal override {
        _load(asset, amount, parameters);
    }

    function _loadFromPosition(Asset memory asset, uint256 amount, bytes memory parameters) internal override {
        _load(asset, amount, parameters);
    }

    function _load(Asset memory asset, uint256 amount, bytes memory parameters) private {
        Parameters memory params = abi.decode(parameters, (Parameters));
        bytes32 id = _getId(params.owner, params.salt);

        unlockedBalances[id][asset.addr] += amount;

        if (asset.addr == C.WETH && msg.value > 0) {
            require(msg.value == amount, "ETH amount mismatch");
            IWETH9(C.WETH).deposit{value: msg.value}();
        } else {
            _transferAsset(asset, msg.sender, address(this), amount);
        }
    }

    function _unloadToUser(Asset memory asset, uint256 amount, bytes memory parameters) internal override {
    Parameters memory params = abi.decode(parameters, (Parameters));
    require(msg.sender == params.owner, "unload: not owner");
    
    bytes32 id = _getId(params.owner, params.salt);
    bytes32 assetHash = keccak256(abi.encode(asset));

    require(unlockedBalances[id][assetHash] >= amount, "_unloadToUser: balance too low");
    unlockedBalances[id][assetHash] -= amount;

    if (asset.addr == C.WETH) {
        IWETH9(C.WETH).withdraw(amount);
        payable(msg.sender).transfer(amount);
    } else {
        _transferAsset(asset, address(this), msg.sender, amount);
    }
}

 function _unloadToPosition(
        address position,
        Asset calldata asset,
        uint256 amount,
        bool isLockedColl,
        bytes calldata parameters
    ) internal override onlyRole(C.BOOKKEEPER_ROLE) {
        Parameters memory params = abi.decode(parameters, (Parameters));

        bytes32 id = _getId(params.owner, params.salt);
        if (!isLockedColl) {
            bytes32 assetHash = keccak256(abi.encode(asset));
            unlockedBalances[id][assetHash] = LibUtils.subWithMsg(
                unlockedBalances[id][assetHash],
                amount,
                "_unloadToPosition: balance too low"
            );
        }
        // AUDIT any method to take out of other users locked balance?
        LibUtilsPublic.safeErc20Transfer(asset.addr, position, amount);
    }

    // Without wasting gas on ERC20 transfer, lock assets here. In normal case (healthy position close) no transfers
    // of collateral are necessary.
    function _lockCollateral(
        Asset calldata asset,
        uint256 amount,
        bytes calldata parameters
    ) internal override onlyRole(C.BOOKKEEPER_ROLE) {
        Parameters memory params = abi.decode(parameters, (Parameters));

        bytes32 id = _getId(params.owner, params.salt);
        bytes32 assetHash = keccak256(abi.encode(asset));
        unlockedBalances[id][assetHash] = LibUtils.subWithMsg(
            unlockedBalances[id][assetHash],
            amount,
            "_lockCollateral: balance too low"
        );
    }

    function _unlockCollateral(
        Asset calldata asset,
        uint256 amount,
        bytes calldata parameters
    ) internal override onlyRole(C.BOOKKEEPER_ROLE) {
        Parameters memory params = abi.decode(parameters, (Parameters));

        bytes32 id = _getId(params.owner, params.salt);
        bytes32 assetHash = keccak256(abi.encode(asset));
        unlockedBalances[id][assetHash] = LibUtils.addWithMsg(
            unlockedBalances[id][assetHash],
            amount,
            "_unlockCollateral: balance too large"
        );
    }

    function getOwner(bytes calldata parameters) external pure override returns (address) {
        return abi.decode(parameters, (Parameters)).owner;
    }

    function canHandleAsset(Asset calldata asset, bytes calldata) external pure override returns (bool) {
        if (asset.standard == ERC20_STANDARD) return true;
        return false;
    }

    function getBalance(
        Asset calldata asset,
        bytes calldata parameters
    ) external view override returns (uint256 amounts) {
        Parameters memory params = abi.decode(parameters, (Parameters));
        bytes32 accountId = _getId(params.owner, params.salt);
        return unlockedBalances[accountId][keccak256(abi.encode(asset))];
    }

    function _getId(address owner, bytes32 salt) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(owner, salt));
    }
}
    





