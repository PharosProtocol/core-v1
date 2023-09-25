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
  AddressLike,
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
} from "../../../common";

export type PluginReferenceStruct = {
  addr: AddressLike;
  parameters: BytesLike;
};

export type PluginReferenceStructOutput = [addr: string, parameters: string] & {
  addr: string;
  parameters: string;
};

export type AgreementStruct = {
  loanAmount: BigNumberish;
  collAmount: BigNumberish;
  loanAsset: BytesLike;
  collAsset: BytesLike;
  minCollateralRatio: BigNumberish;
  maxDuration: BigNumberish;
  isLeverage: boolean;
  lenderAccount: PluginReferenceStruct;
  borrowerAccount: PluginReferenceStruct;
  assessor: PluginReferenceStruct;
  liquidator: PluginReferenceStruct;
  loanOracle: PluginReferenceStruct;
  collOracle: PluginReferenceStruct;
  factory: AddressLike;
  position: PluginReferenceStruct;
  deploymentTime: BigNumberish;
};

export type AgreementStructOutput = [
  loanAmount: bigint,
  collAmount: bigint,
  loanAsset: string,
  collAsset: string,
  minCollateralRatio: bigint,
  maxDuration: bigint,
  isLeverage: boolean,
  lenderAccount: PluginReferenceStructOutput,
  borrowerAccount: PluginReferenceStructOutput,
  assessor: PluginReferenceStructOutput,
  liquidator: PluginReferenceStructOutput,
  loanOracle: PluginReferenceStructOutput,
  collOracle: PluginReferenceStructOutput,
  factory: string,
  position: PluginReferenceStructOutput,
  deploymentTime: bigint
] & {
  loanAmount: bigint;
  collAmount: bigint;
  loanAsset: string;
  collAsset: string;
  minCollateralRatio: bigint;
  maxDuration: bigint;
  isLeverage: boolean;
  lenderAccount: PluginReferenceStructOutput;
  borrowerAccount: PluginReferenceStructOutput;
  assessor: PluginReferenceStructOutput;
  liquidator: PluginReferenceStructOutput;
  loanOracle: PluginReferenceStructOutput;
  collOracle: PluginReferenceStructOutput;
  factory: string;
  position: PluginReferenceStructOutput;
  deploymentTime: bigint;
};

export interface AssessorInterface extends Interface {
  getFunction(nameOrSignature: "getCost"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCost",
    values: [AgreementStruct]
  ): string;

  decodeFunctionResult(functionFragment: "getCost", data: BytesLike): Result;
}

export interface Assessor extends BaseContract {
  connect(runner?: ContractRunner | null): Assessor;
  waitForDeployment(): Promise<this>;

  interface: AssessorInterface;

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

  getCost: TypedContractMethod<[agreement: AgreementStruct], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getCost"
  ): TypedContractMethod<[agreement: AgreementStruct], [bigint], "view">;

  filters: {};
}
