/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export type CallStruct = { target: AddressLike; data: BytesLike };

export type CallStructOutput = [target: string, data: string] & {
  target: string;
  data: string;
};

export interface IWellInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addLiquidity"
      | "addLiquidityFeeOnTransfer"
      | "aquifer"
      | "getAddLiquidityOut"
      | "getRemoveLiquidityImbalancedIn"
      | "getRemoveLiquidityOneTokenOut"
      | "getRemoveLiquidityOut"
      | "getReserves"
      | "getShiftOut"
      | "getSwapIn"
      | "getSwapOut"
      | "pumps"
      | "removeLiquidity"
      | "removeLiquidityImbalanced"
      | "removeLiquidityOneToken"
      | "shift"
      | "skim"
      | "swapFrom"
      | "swapFromFeeOnTransfer"
      | "swapTo"
      | "sync"
      | "tokens"
      | "well"
      | "wellData"
      | "wellFunction"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddLiquidity"
      | "RemoveLiquidity"
      | "RemoveLiquidityOneToken"
      | "Shift"
      | "Swap"
      | "Sync"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish[], BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidityFeeOnTransfer",
    values: [BigNumberish[], BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "aquifer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAddLiquidityOut",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoveLiquidityImbalancedIn",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoveLiquidityOneTokenOut",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemoveLiquidityOut",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getShiftOut",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapIn",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapOut",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pumps", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, BigNumberish[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityImbalanced",
    values: [BigNumberish, BigNumberish[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneToken",
    values: [BigNumberish, AddressLike, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shift",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "skim", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "swapFrom",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapFromFeeOnTransfer",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTo",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "sync", values?: undefined): string;
  encodeFunctionData(functionFragment: "tokens", values?: undefined): string;
  encodeFunctionData(functionFragment: "well", values?: undefined): string;
  encodeFunctionData(functionFragment: "wellData", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wellFunction",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidityFeeOnTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "aquifer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAddLiquidityOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoveLiquidityImbalancedIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoveLiquidityOneTokenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRemoveLiquidityOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShiftOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSwapIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSwapOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pumps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityImbalanced",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shift", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swapFrom", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapFromFeeOnTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swapTo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sync", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "well", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wellData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wellFunction",
    data: BytesLike
  ): Result;
}

export namespace AddLiquidityEvent {
  export type InputTuple = [
    tokenAmountsIn: BigNumberish[],
    lpAmountOut: BigNumberish,
    recipient: AddressLike
  ];
  export type OutputTuple = [
    tokenAmountsIn: bigint[],
    lpAmountOut: bigint,
    recipient: string
  ];
  export interface OutputObject {
    tokenAmountsIn: bigint[];
    lpAmountOut: bigint;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityEvent {
  export type InputTuple = [
    lpAmountIn: BigNumberish,
    tokenAmountsOut: BigNumberish[],
    recipient: AddressLike
  ];
  export type OutputTuple = [
    lpAmountIn: bigint,
    tokenAmountsOut: bigint[],
    recipient: string
  ];
  export interface OutputObject {
    lpAmountIn: bigint;
    tokenAmountsOut: bigint[];
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemoveLiquidityOneTokenEvent {
  export type InputTuple = [
    lpAmountIn: BigNumberish,
    tokenOut: AddressLike,
    tokenAmountOut: BigNumberish,
    recipient: AddressLike
  ];
  export type OutputTuple = [
    lpAmountIn: bigint,
    tokenOut: string,
    tokenAmountOut: bigint,
    recipient: string
  ];
  export interface OutputObject {
    lpAmountIn: bigint;
    tokenOut: string;
    tokenAmountOut: bigint;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ShiftEvent {
  export type InputTuple = [
    reserves: BigNumberish[],
    toToken: AddressLike,
    minAmountOut: BigNumberish,
    recipient: AddressLike
  ];
  export type OutputTuple = [
    reserves: bigint[],
    toToken: string,
    minAmountOut: bigint,
    recipient: string
  ];
  export interface OutputObject {
    reserves: bigint[];
    toToken: string;
    minAmountOut: bigint;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [
    fromToken: AddressLike,
    toToken: AddressLike,
    amountIn: BigNumberish,
    amountOut: BigNumberish,
    recipient: AddressLike
  ];
  export type OutputTuple = [
    fromToken: string,
    toToken: string,
    amountIn: bigint,
    amountOut: bigint,
    recipient: string
  ];
  export interface OutputObject {
    fromToken: string;
    toToken: string;
    amountIn: bigint;
    amountOut: bigint;
    recipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SyncEvent {
  export type InputTuple = [reserves: BigNumberish[]];
  export type OutputTuple = [reserves: bigint[]];
  export interface OutputObject {
    reserves: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IWell extends BaseContract {
  connect(runner?: ContractRunner | null): IWell;
  waitForDeployment(): Promise<this>;

  interface: IWellInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addLiquidity: TypedContractMethod<
    [
      tokenAmountsIn: BigNumberish[],
      minLpAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  addLiquidityFeeOnTransfer: TypedContractMethod<
    [
      tokenAmountsIn: BigNumberish[],
      minLpAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  aquifer: TypedContractMethod<[], [string], "view">;

  getAddLiquidityOut: TypedContractMethod<
    [tokenAmountsIn: BigNumberish[]],
    [bigint],
    "view"
  >;

  getRemoveLiquidityImbalancedIn: TypedContractMethod<
    [tokenAmountsOut: BigNumberish[]],
    [bigint],
    "view"
  >;

  getRemoveLiquidityOneTokenOut: TypedContractMethod<
    [lpAmountIn: BigNumberish, tokenOut: AddressLike],
    [bigint],
    "view"
  >;

  getRemoveLiquidityOut: TypedContractMethod<
    [lpAmountIn: BigNumberish],
    [bigint[]],
    "view"
  >;

  getReserves: TypedContractMethod<[], [bigint[]], "view">;

  getShiftOut: TypedContractMethod<
    [tokenOut: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getSwapIn: TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amountOut: BigNumberish],
    [bigint],
    "view"
  >;

  getSwapOut: TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amountIn: BigNumberish],
    [bigint],
    "view"
  >;

  pumps: TypedContractMethod<[], [CallStructOutput[]], "view">;

  removeLiquidity: TypedContractMethod<
    [
      lpAmountIn: BigNumberish,
      minTokenAmountsOut: BigNumberish[],
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  removeLiquidityImbalanced: TypedContractMethod<
    [
      maxLpAmountIn: BigNumberish,
      tokenAmountsOut: BigNumberish[],
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  removeLiquidityOneToken: TypedContractMethod<
    [
      lpAmountIn: BigNumberish,
      tokenOut: AddressLike,
      minTokenAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  shift: TypedContractMethod<
    [tokenOut: AddressLike, minAmountOut: BigNumberish, recipient: AddressLike],
    [bigint],
    "nonpayable"
  >;

  skim: TypedContractMethod<[recipient: AddressLike], [bigint[]], "nonpayable">;

  swapFrom: TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  swapFromFeeOnTransfer: TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  swapTo: TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      maxAmountIn: BigNumberish,
      amountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;

  sync: TypedContractMethod<[], [void], "nonpayable">;

  tokens: TypedContractMethod<[], [string[]], "view">;

  well: TypedContractMethod<
    [],
    [
      [string[], CallStructOutput, CallStructOutput[], string, string] & {
        _tokens: string[];
        _wellFunction: CallStructOutput;
        _pumps: CallStructOutput[];
        _wellData: string;
        _aquifer: string;
      }
    ],
    "view"
  >;

  wellData: TypedContractMethod<[], [string], "view">;

  wellFunction: TypedContractMethod<[], [CallStructOutput], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addLiquidity"
  ): TypedContractMethod<
    [
      tokenAmountsIn: BigNumberish[],
      minLpAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addLiquidityFeeOnTransfer"
  ): TypedContractMethod<
    [
      tokenAmountsIn: BigNumberish[],
      minLpAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "aquifer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAddLiquidityOut"
  ): TypedContractMethod<[tokenAmountsIn: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRemoveLiquidityImbalancedIn"
  ): TypedContractMethod<[tokenAmountsOut: BigNumberish[]], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRemoveLiquidityOneTokenOut"
  ): TypedContractMethod<
    [lpAmountIn: BigNumberish, tokenOut: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRemoveLiquidityOut"
  ): TypedContractMethod<[lpAmountIn: BigNumberish], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getReserves"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "getShiftOut"
  ): TypedContractMethod<[tokenOut: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getSwapIn"
  ): TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amountOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSwapOut"
  ): TypedContractMethod<
    [fromToken: AddressLike, toToken: AddressLike, amountIn: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pumps"
  ): TypedContractMethod<[], [CallStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "removeLiquidity"
  ): TypedContractMethod<
    [
      lpAmountIn: BigNumberish,
      minTokenAmountsOut: BigNumberish[],
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityImbalanced"
  ): TypedContractMethod<
    [
      maxLpAmountIn: BigNumberish,
      tokenAmountsOut: BigNumberish[],
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeLiquidityOneToken"
  ): TypedContractMethod<
    [
      lpAmountIn: BigNumberish,
      tokenOut: AddressLike,
      minTokenAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "shift"
  ): TypedContractMethod<
    [tokenOut: AddressLike, minAmountOut: BigNumberish, recipient: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "skim"
  ): TypedContractMethod<[recipient: AddressLike], [bigint[]], "nonpayable">;
  getFunction(
    nameOrSignature: "swapFrom"
  ): TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapFromFeeOnTransfer"
  ): TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      amountIn: BigNumberish,
      minAmountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTo"
  ): TypedContractMethod<
    [
      fromToken: AddressLike,
      toToken: AddressLike,
      maxAmountIn: BigNumberish,
      amountOut: BigNumberish,
      recipient: AddressLike,
      deadline: BigNumberish
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sync"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tokens"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "well"
  ): TypedContractMethod<
    [],
    [
      [string[], CallStructOutput, CallStructOutput[], string, string] & {
        _tokens: string[];
        _wellFunction: CallStructOutput;
        _pumps: CallStructOutput[];
        _wellData: string;
        _aquifer: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "wellData"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wellFunction"
  ): TypedContractMethod<[], [CallStructOutput], "view">;

  getEvent(
    key: "AddLiquidity"
  ): TypedContractEvent<
    AddLiquidityEvent.InputTuple,
    AddLiquidityEvent.OutputTuple,
    AddLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidity"
  ): TypedContractEvent<
    RemoveLiquidityEvent.InputTuple,
    RemoveLiquidityEvent.OutputTuple,
    RemoveLiquidityEvent.OutputObject
  >;
  getEvent(
    key: "RemoveLiquidityOneToken"
  ): TypedContractEvent<
    RemoveLiquidityOneTokenEvent.InputTuple,
    RemoveLiquidityOneTokenEvent.OutputTuple,
    RemoveLiquidityOneTokenEvent.OutputObject
  >;
  getEvent(
    key: "Shift"
  ): TypedContractEvent<
    ShiftEvent.InputTuple,
    ShiftEvent.OutputTuple,
    ShiftEvent.OutputObject
  >;
  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;
  getEvent(
    key: "Sync"
  ): TypedContractEvent<
    SyncEvent.InputTuple,
    SyncEvent.OutputTuple,
    SyncEvent.OutputObject
  >;

  filters: {
    "AddLiquidity(uint256[],uint256,address)": TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;
    AddLiquidity: TypedContractEvent<
      AddLiquidityEvent.InputTuple,
      AddLiquidityEvent.OutputTuple,
      AddLiquidityEvent.OutputObject
    >;

    "RemoveLiquidity(uint256,uint256[],address)": TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;
    RemoveLiquidity: TypedContractEvent<
      RemoveLiquidityEvent.InputTuple,
      RemoveLiquidityEvent.OutputTuple,
      RemoveLiquidityEvent.OutputObject
    >;

    "RemoveLiquidityOneToken(uint256,address,uint256,address)": TypedContractEvent<
      RemoveLiquidityOneTokenEvent.InputTuple,
      RemoveLiquidityOneTokenEvent.OutputTuple,
      RemoveLiquidityOneTokenEvent.OutputObject
    >;
    RemoveLiquidityOneToken: TypedContractEvent<
      RemoveLiquidityOneTokenEvent.InputTuple,
      RemoveLiquidityOneTokenEvent.OutputTuple,
      RemoveLiquidityOneTokenEvent.OutputObject
    >;

    "Shift(uint256[],address,uint256,address)": TypedContractEvent<
      ShiftEvent.InputTuple,
      ShiftEvent.OutputTuple,
      ShiftEvent.OutputObject
    >;
    Shift: TypedContractEvent<
      ShiftEvent.InputTuple,
      ShiftEvent.OutputTuple,
      ShiftEvent.OutputObject
    >;

    "Swap(address,address,uint256,uint256,address)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;

    "Sync(uint256[])": TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;
    Sync: TypedContractEvent<
      SyncEvent.InputTuple,
      SyncEvent.OutputTuple,
      SyncEvent.OutputObject
    >;
  };
}
