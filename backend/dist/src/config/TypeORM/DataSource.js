"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const path_1 = __importDefault(require("path"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const envs_1 = require("../envs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: envs_1.DB_HOST,
    port: Number(envs_1.DB_PORT),
    username: envs_1.DB_USER,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_DATABASE,
    entities: [
        path_1.default.join(__dirname, '../repositories/typeorm/entities/*.{js,ts}'),
    ],
    logging: envs_1.LOG_TYPEORM_ENABLE === 'true',
});
