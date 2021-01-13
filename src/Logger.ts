import { LogContract } from "./contracts/LogContract";
import { OutputContract } from "./contracts/OutputContract";
import { HandlerFactory } from "./HandlerFactory";
import { LogType, Options } from "./types/options";

export class Logger implements LogContract {
    private outputHandler: OutputContract;

    constructor(options: Options) {
        this.outputHandler = HandlerFactory.getInstance(options.type);
    }

    info(message: string): void {
        this.log(LogType.INFO, message);
    }

    debug(message: string): void {
        this.log(LogType.DEBUG, message);
    }

    warn(message: string): void {
        this.log(LogType.WARN, message);
    }

    error(message: string): void {
        this.log(LogType.ERROR, message);
    }

    private log(type: LogType, message: string): void {
        this.outputHandler.write(type, message);
    }
}
