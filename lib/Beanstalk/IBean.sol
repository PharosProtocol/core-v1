// SPDX-License-Identifier: MIT

pragma solidity =0.8.19;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title IBean
 * @author Publius
 * @notice Bean Interface
 */
abstract contract IBean is IERC20 {
    function burn(uint256 amount) public virtual;
    function burnFrom(address account, uint256 amount) public virtual;
    function mint(address account, uint256 amount) public virtual;
    function symbol() public view virtual returns (string memory);
}