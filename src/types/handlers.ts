import { OutputContract } from "../contracts/OutputContract";
import { OutputType } from "./options";

export type HandlersRecord = Record<OutputType, OutputContract>;
export type HandlersMap = Partial<HandlersRecord>;
