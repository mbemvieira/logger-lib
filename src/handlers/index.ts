import { ConsoleHandler } from './ConsoleHandler';
import { FileHandler } from './FileHandler';
import { OutputType } from "../types/options";

export const handlerMap: Record<OutputType, any> = {
    [OutputType.CONSOLE]: ConsoleHandler,
    [OutputType.FILE]: FileHandler,
};
