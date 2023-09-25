/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IOracleInterface extends Interface {
  getFunction(
    nameOrSignature: "getClosePrice" | "getOpenPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getClosePrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOpenPrice",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getClosePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOpenPrice",
    data: BytesLike
  ): Result;
}

export interface IOracle extends BaseContract {
  connect(runner?: ContractRunner | null): IOracle;
  waitForDeployment(): Promise<this>;

  interface: IOracleInterface;

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

  getClosePrice: TypedContractMethod<[parameters: BytesLike], [bigint], "view">;

  getOpenPrice: TypedContractMethod<[parameters: BytesLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getClosePrice"
  ): TypedContractMethod<[parameters: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOpenPrice"
  ): TypedContractMethod<[parameters: BytesLike], [bigint], "view">;

  filters: {};
}
