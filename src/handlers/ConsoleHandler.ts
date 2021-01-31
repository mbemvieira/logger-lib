import { OutputContract } from "../contracts/OutputContract";
import { LogType, ConsoleOptions } from "../types/options";

export class ConsoleHandler implements OutputContract {
    constructor(options: ConsoleOptions) {
        // 
    }

    write(type: LogType, message: string): boolean {
        console[type](message);
        return true;
    }
}
