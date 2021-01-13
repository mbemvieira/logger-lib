import { OutputContract } from "./contracts/OutputContract";
import { handlerMap } from "./handlers";
import { HandlersMap } from "./types/handlers";
import { OutputType } from "./types/options";

export class HandlerFactory {
    private static handlers: HandlersMap = {};

    public static getInstance(type: OutputType): OutputContract {
        if (HandlerFactory.handlers[type] == null) {
            HandlerFactory.handlers[type] = new handlerMap[type]();
        }

        return <OutputContract> HandlerFactory.handlers[type];
    }
}
