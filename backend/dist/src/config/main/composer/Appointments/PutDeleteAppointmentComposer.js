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
const AppointmentRepositoryClass_1 = require("../../../repositories/typeorm/AppointmentRepositoryClass");
const PutDeleteAppointmentUseCase_1 = __importDefault(require("../../../usecases/Appointments/PutDeleteAppointmentUseCase"));
const HttpResponse_1 = require("../../../../helpers/HttpResponse");
const PinoLogger_1 = __importDefault(require("../../../PinoLogger"));
const PutDeleteAppointmentsComposer = (HttpRequest, HttpResponse) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AppointmentRepository = new AppointmentRepositoryClass_1.AppointmentRepositoryClass();
        const res = yield (0, PutDeleteAppointmentUseCase_1.default)({ AppointmentRepository, id_apointment: Number(HttpRequest.params.id) });
        return (0, HttpResponse_1.OK)(HttpResponse, res);
    }
    catch (error) {
        PinoLogger_1.default.error({
            error,
            message: `[COMPOSER]: Catch Error (PutDeleteAppointmentsComposer)`,
        });
        return HttpResponse_1.InternalServerError;
    }
});
exports.default = PutDeleteAppointmentsComposer;
