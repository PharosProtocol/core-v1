// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.19;

import "src/protocol/C.sol";
import {IComparableParameters} from "src/modules/IComparableParameters.sol";
import {Agreement} from "src/libraries/LibOrderBook.sol";
import {AccessControl} from "lib/openzeppelin-contracts/contracts/access/AccessControl.sol";
import {IPosition} from "src/Terminal/IPosition.sol";

/**
 * Liquidators are used to dismantle a Position and return capital to Lender and Borrower. Liquidators will be
 * compensated based on the configuration of the Rewarder. The liquidator only defines how the liquidation is handled
 * and not the reward amount.
 * Liquidators are given a position by being set as the controller over the position contract.
 * Each type of Liquidator is permissionlessly deployed as an independent contract and represents one computation
 * method for liquidating. Each type of Oracle may use an arbitrary set of parameters, which will be
 * set and stored per position.
 * Each implementation contract must implement the functionality of the standard Liquidator Interface defined here.
 * Implementations may also offer additional non-essential functionality beyond the standard interface.
 */

interface ILiquidator is IComparableParameters {
    /// @notice called at agreement creation time.
    function verifyCompatibility(Agreement memory agreement, bytes memory parameters) external view;
    // NOTE it isn't really necessary to standardize the liquidation interface. It could entirely bypass modulus and
    //      implement an arbitrarily complex interface with calls being made directly to the liquidator contract. Would
    //      need to verify signatures, but otherwise not much more complex. Probably will not implement a liquidation
    //      UI for most implementations anyway.
    /// @notice require parameters to be valid and non-hostile.
    function liquidate(Agreement memory agreement, bytes calldata parameters) external;

    // NOTE no need to make public or standard if using a liquidation contract
    /// @dev may return a number that is larger than the total collateral amount
    // function getRewardValue(Agreement calldata agreement) external view returns (uint256);
}

abstract contract Liquidator is ILiquidator, AccessControl {
    // NOTE need a system to ensure the same "position" signed message cannot be double liquidated
    // mapping(bytes32 => bool) internal liquidating;

    function liquidate(Agreement memory agreement, bytes memory parameters) external {
        require(
            IPosition(agreement.positionAddr).hasRole(C.CONTROLLER_ROLE, address(this)),
            "Liquidator: not currently liquidating this position"
        );
        _liquidate(agreement, parameters);
        // IPosition(agreement.positionAddr).transferContract(agreement.liquidator.addr);
    }

    function _liquidate(Agreement memory agreement, bytes memory parameters) internal virtual;
}