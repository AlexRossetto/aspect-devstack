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
const PinoLogger_1 = __importDefault(require("../../PinoLogger"));
const GetListAppointmentsUseCase = (_a) => __awaiter(void 0, [_a], void 0, function* ({ AppointmentRepository, }) {
    try {
        const { data } = yield AppointmentRepository.listAppointments();
        return { data };
    }
    catch (error) {
        PinoLogger_1.default.error({
            error,
            message: `[USECASE]: Catch Error (GetListAppointmentsUseCase) `,
        });
        throw new Error(error);
    }
});
exports.default = GetListAppointmentsUseCase;