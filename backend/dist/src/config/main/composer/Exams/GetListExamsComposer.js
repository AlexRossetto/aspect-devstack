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
const ExamsRepositoryClass_1 = require("../../../repositories/typeorm/ExamsRepositoryClass");
const GetListExamsUseCase_1 = __importDefault(require("../../../usecases/Exams/GetListExamsUseCase"));
const HttpResponse_1 = require("../../../../helpers/HttpResponse");
const PinoLogger_1 = __importDefault(require("../../../PinoLogger"));
const GetListExamsComposer = (HttpRequest, HttpResponse) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ExamsRepository = new ExamsRepositoryClass_1.ExamsRepositoryClass();
        const { data } = yield (0, GetListExamsUseCase_1.default)({
            ExamsRepository
        });
        return (0, HttpResponse_1.OK)(HttpResponse, data);
    }
    catch (error) {
        PinoLogger_1.default.error({
            error,
            message: `[COMPOSER]: Catch Error (GetListExamsComposer)`,
        });
        return (0, HttpResponse_1.InternalServerError)(HttpResponse);
    }
});
exports.default = GetListExamsComposer;
