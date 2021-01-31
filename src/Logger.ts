import { LogContract } from "./contracts/LogContract";
import { OutputContract } from "./contracts/OutputContract";
import { HandlerFactory } from "./HandlerFactory";
import { LogType, Options, OutputType } from "./types/options";

export class Logger implements LogContract {
    private outputHandler: OutputContract;

    constructor(type: OutputType, options: Options) {
        this.outputHandler = HandlerFactory.getInstance(type, options);
    }

    info(message: string): void {
        this.log(LogType.INFO, message).catch((error) => console.log(error.message));
    }

    debug(message: string): void {
        this.log(LogType.DEBUG, message).catch((error) => console.log(error.message));
    }

    warn(message: string): void {
        this.log(LogType.WARN, message).catch((error) => console.log(error.message));
    }

    error(message: string): void {
        this.log(LogType.ERROR, message).catch((error) => console.log(error.message));
    }

    private async log(type: LogType, message: string): Promise<void> {
        try {
            await this.outputHandler.write(type, message);
        } catch (error) {
            throw error;
        }
    }
}
