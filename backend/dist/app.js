"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = require("path");
dotenv_1.default.config({ path: (0, path_1.resolve)(__dirname, '..', '.env') });
const AppConfig_1 = __importDefault(require("./src/config/AppConfig"));
const DataSource_1 = require("./src/config/TypeORM/DataSource");
const PinoLogger_1 = __importDefault(require("./src/config/PinoLogger"));
DataSource_1.AppDataSource.initialize()
    .then(() => {
    PinoLogger_1.default.info({
        message: `[APP]: DataSource has been initialized !!`,
    });
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    const PORT = process.env.PORT || 5000;
    (0, AppConfig_1.default)(app);
    app.listen(PORT, () => {
        PinoLogger_1.default.info({
            message: `[APP]: Running at http://localhost:${PORT}`,
        });
    });
})
    .catch((error) => {
    PinoLogger_1.default.error({
        error,
        message: '[APP]: Error during DataSource initialization',
    });
});
