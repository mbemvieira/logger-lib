import { OutputContract } from "../contracts/OutputContract";
import { LogType } from "../types/options";

export class FileHandler implements OutputContract {
    write(type: LogType, message: string): boolean {
        throw new Error('Not implemented yet');
    }
}
