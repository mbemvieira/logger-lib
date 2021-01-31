import { Logger } from "./Logger";
import { ConsoleOptions, FileOptions, OutputType } from "./types/options";

// const options: ConsoleOptions = {
//     // path: './'
// }

// const logger = new Logger(OutputType.CONSOLE, options);

// logger.error('Deu errado!');

const options: FileOptions = {
    path: 'logs/log_222.txt'
}

const logger = new Logger(OutputType.FILE, options);

logger.error('Deu errado!');
logger.info('Informativo');