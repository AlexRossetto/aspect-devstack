"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GetListExamsComposer_1 = __importDefault(require("../config/main/composer/Exams/GetListExamsComposer"));
const GetListAppointmentsComposer_1 = __importDefault(require("../config/main/composer/Appointments/GetListAppointmentsComposer"));
const PostScheduleAppointmentComposer_1 = __importDefault(require("../config/main/composer/Appointments/PostScheduleAppointmentComposer"));
const PutDeleteAppointmentComposer_1 = __importDefault(require("../config/main/composer/Appointments/PutDeleteAppointmentComposer"));
const router = (0, express_1.Router)();
router.get('/exams', GetListExamsComposer_1.default);
router.get('/appointments', GetListAppointmentsComposer_1.default);
router.post('/appointments', PostScheduleAppointmentComposer_1.default);
router.put('/appointments/:id', PutDeleteAppointmentComposer_1.default);
exports.default = router;
