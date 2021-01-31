export enum OutputType {
    CONSOLE = 'console',
    FILE = 'file',
};

// export type OutputTypeStrings = keyof typeof OutputType;

export enum LogType {
    INFO = 'info',
    DEBUG = 'debug',
    WARN = 'warn',
    ERROR = 'error',
};

export type ConsoleOptions = {
};

export type FileOptions = {
    path: string,
};

export type Options = ConsoleOptions | FileOptions;
