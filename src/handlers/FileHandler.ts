import { promises as fsp } from "fs";
import { EOL } from "os";
import { OutputContract } from "../contracts/OutputContract";
import { LogType, FileOptions } from "../types/options";
import { errorTag } from "../types/handlers";

export class FileHandler implements OutputContract {
    private path: string;

    constructor(options: FileOptions) {
        this.path = options.path;
    }

    async write(type: LogType, message: string): Promise<void> {
        try {
            await fsp.appendFile(this.path, this.formatMessage(type, message));
        } catch (error) {
            throw error;
        }
    }

    private formatMessage(type: LogType, message: string) {
        return `${errorTag[type]}: ${message}${EOL}`;
    }
}
