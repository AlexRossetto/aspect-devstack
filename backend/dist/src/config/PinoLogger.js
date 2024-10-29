"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const Pino = (0, pino_1.default)({
    level: 'debug',
    transport: {
        target: 'pino-pretty',
    },
});
const logger = {
    info({ error, message }) {
        return Pino.info(error, message);
    },
    error({ error, message }) {
        return Pino.error(error, message);
    },
    warn({ error, message }) {
        return Pino.warn(error, message);
    },
};
exports.default = logger;
