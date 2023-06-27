// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.19;

import "lib/forge-std/src/console.sol";

import {C} from "src/libraries/C.sol";
import {IUniswapV3Pool} from "lib/v3-core/contracts/interfaces/IUniswapV3Pool.sol";
import {PoolAddress} from "lib/v3-periphery/contracts/libraries/PoolAddress.sol";
import {OracleLibrary} from "lib/v3-periphery/contracts/libraries/OracleLibrary.sol";
import {Path} from "lib/v3-periphery/contracts/libraries/path.sol";
import {Utils} from "src/libraries/LibUtil.sol";

// NOTE: Could really use another set of eyes on this. So much potential for arithmetic errors.

/// @notice Utilities for using Uniswap V3 as an oracle.
library LibUniswapV3 {
    using Path for bytes;

    /// @dev Probably not cheap, due to repeated external calls. // USE getChainedPrice ?
    function getPathTWAP(bytes memory path, uint256 amount, uint32 twapTime) external view returns (uint256) {
        require(path.numPools() > 0, "Empty path provided");
        for (uint256 i = 0; i < path.numPools(); i++) {
            (address tokenIn, address tokenOut, uint24 fee) = path.decodeFirstPool();
            console.log("tokenIn: %s, tokenOut: %s, fee: %s", tokenIn, tokenOut, fee);
            address pool = PoolAddress.computeAddress(C.UNI_V3_FACTORY, PoolAddress.getPoolKey(tokenIn, tokenOut, fee));
            console.log("pool: %s", pool);
            // Computation depends on PoolAddress.POOL_INIT_CODE_HASH. Default value in Uni repo may not be correct.
            require(Utils.isDeployedContract(pool), "Invalid pool, no contract at address");
            amount = getTWAP(pool, amount, tokenIn, tokenOut, twapTime);
            path = path.skipToken();
        }
        return amount;
    }

    /// Get the TWAP of the pool across interval. token1/token0.
    function getTWAP(address pool, uint256 amount, address tokenIn, address tokenOut, uint32 twapTime)
        internal
        view
        returns (uint256)
    {
        (,,, uint16 observationCardinality,,,) = IUniswapV3Pool(pool).slot0();
        console.log("oldest observation seconds ago: %s", OracleLibrary.getOldestObservationSecondsAgo(pool));
        require(OracleLibrary.getOldestObservationSecondsAgo(pool) >= twapTime, "UniV3 pool observations too young"); // ensure needed data is available
        require(observationCardinality >= twapTime / 12, "UniV3 pool cardinality too low"); // shortest case scenario should always cover twap time
        (int24 arithmeticMeanTick,) = OracleLibrary.consult(pool, twapTime);
        console.log("arithmeticMeanTick:");
        console.logInt(arithmeticMeanTick);
        return OracleLibrary.getQuoteAtTick(arithmeticMeanTick, uint128(amount), tokenIn, tokenOut); // NOTE risk on uint downsize?
    }
}
