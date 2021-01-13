import { LogType } from "../types/options";

export interface OutputContract {
    write(type: LogType, message: string): boolean;
}
