import { Logger } from "./Logger";
import { Options, OutputType } from "./types/options";

const options: Options = {
    type: OutputType.CONSOLE
}

const logger = new Logger(options);

logger.error('Deu errado!');
