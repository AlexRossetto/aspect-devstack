"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamsRepositoryClass = void 0;
const PinoLogger_1 = __importDefault(require("../../PinoLogger"));
const DataSource_1 = require("../../TypeORM/DataSource");
const ExamEntity_1 = require("./entities/ExamEntity");
class ExamsRepositoryClass {
    constructor() {
        this.exam = DataSource_1.AppDataSource.getRepository(ExamEntity_1.ExamsEntity);
    }
    listExams() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [data] = yield this.exam.findAndCount();
                return {
                    data,
                };
            }
            catch (error) {
                PinoLogger_1.default.error({
                    error,
                    message: `[REPOSITORY]:  Catch Error (ExamsRepositoryClass - listExams)`,
                });
                throw new Error(error);
            }
        });
    }
}
exports.ExamsRepositoryClass = ExamsRepositoryClass;
