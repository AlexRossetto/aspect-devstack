import pino from 'pino';

const Pino = pino({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
    },
});

interface ILogger {
    error?: any;
    message: string;
}

const logger = {
    info({ error, message }: ILogger) {
        return Pino.info(error, message);
    },
    error({ error, message }: ILogger) {
        return Pino.error(error, message);
    },
    warn({ error, message }: ILogger) {
        return Pino.warn(error, message);
    },
};

export default logger;
