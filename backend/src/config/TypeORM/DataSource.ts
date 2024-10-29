import path from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    LOG_TYPEORM_ENABLE,
} from '../envs';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [
        path.join(__dirname, '../repositories/typeorm/entities/*.{js,ts}'),
    ],
    logging: LOG_TYPEORM_ENABLE === 'true',
});
