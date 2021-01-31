import { ConsoleHandler } from './handlers/ConsoleHandler';
import { FileHandler } from './handlers/FileHandler';
import { OutputContract } from "./contracts/OutputContract";
import { HandlersList } from "./types/handlers";
import { Options, OutputType } from "./types/options";

export class HandlerFactory {
    private static handlers: HandlersList = {};
    private static handlersMap: Record<OutputType, any> = {
        [OutputType.CONSOLE]: ConsoleHandler,
        [OutputType.FILE]: FileHandler,
    };

    public static getInstance(type: OutputType, options: Options): OutputContract {
        if (HandlerFactory.handlers[type] == null) {
            HandlerFactory.handlers[type] = new HandlerFactory.handlersMap[type](options);
        }

        return <OutputContract> HandlerFactory.handlers[type];
    }
}
