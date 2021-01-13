import { OutputContract } from "../contracts/OutputContract";
import { LogType } from "../types/options";

export class ConsoleHandler implements OutputContract {
    write(type: LogType, message: string): boolean {
        console[type](message);
        return true;
    }
}
