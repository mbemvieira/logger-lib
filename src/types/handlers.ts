import { OutputContract } from "../contracts/OutputContract";
import { OutputType, LogType } from "./options";

export type HandlersRecord = Record<OutputType, OutputContract>;
export type HandlersList = Partial<HandlersRecord>;

export const errorTag: Record<LogType, string> = {
    [LogType.INFO]: '[INFO]',
    [LogType.DEBUG]: '[DEBUG]',
    [LogType.WARN]: '[WARN]',
    [LogType.ERROR]: '[ERROR]',
};
