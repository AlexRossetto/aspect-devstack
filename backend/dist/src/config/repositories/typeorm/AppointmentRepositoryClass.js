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
exports.AppointmentRepositoryClass = void 0;
const PinoLogger_1 = __importDefault(require("../../PinoLogger"));
const DataSource_1 = require("../../TypeORM/DataSource");
const AppointmentEntity_1 = require("./entities/AppointmentEntity");
class AppointmentRepositoryClass {
    constructor() {
        this.appointment = DataSource_1.AppDataSource.getRepository(AppointmentEntity_1.AppointmentEntity);
    }
    listAppointments() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [data] = yield this.appointment.findAndCount();
                return {
                    data,
                };
            }
            catch (error) {
                PinoLogger_1.default.error({
                    error,
                    message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - listAppointments)`,
                });
                throw new Error(error);
            }
        });
    }
    scheduleAppointment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield this.appointment.insert(data);
                return {
                    res,
                };
            }
            catch (error) {
                PinoLogger_1.default.error({
                    error,
                    message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - scheduleAppointment)`,
                });
                throw new Error(error);
            }
        });
    }
    deleteAppointment(_a) {
        return __awaiter(this, arguments, void 0, function* ({ id: id_appointment }) {
            try {
                const res = yield this.appointment.delete(id_appointment);
                return {
                    res,
                };
            }
            catch (error) {
                PinoLogger_1.default.error({
                    error,
                    message: `[REPOSITORY]:  Catch Error (AppointmentRepositoryClass - deleteAppointment)`,
                });
                throw new Error(error);
            }
        });
    }
}
exports.AppointmentRepositoryClass = AppointmentRepositoryClass;
