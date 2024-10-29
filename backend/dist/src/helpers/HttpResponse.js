"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = exports.OK = void 0;
const metaDataContent = (meta) => {
    return Object.assign({ timestamp: Date.now() }, meta);
};
const OK = (HttpResponse, data, meta) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'success',
        data,
    });
};
exports.OK = OK;
const OKNoContent = (HttpResponse) => {
    return HttpResponse.status(204);
};
const NotAcceptable = (HttpResponse, meta) => {
    return HttpResponse.status(406).json({
        code: 406,
        meta: metaDataContent(meta),
        message: 'not acceptable',
    });
};
const InternalServerError = (HttpResponse, meta, log) => {
    return HttpResponse.status(500).json({
        code: 500,
        meta: metaDataContent(meta),
        message: 'Internal Server Error',
        log,
    });
};
exports.InternalServerError = InternalServerError;
const LoginPassValid = (HttpResponse, data, meta, log) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'success',
        auth: true,
        data,
        log,
    });
};
const LoginPassInvalid = (HttpResponse, meta, log) => {
    return HttpResponse.status(400).json({
        code: 400,
        meta: metaDataContent(meta),
        message: 'login or password invalid',
        auth: false,
        log,
    });
};
const Authorized = (HttpResponse, data, meta, log) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'authorized',
        data,
        log,
    });
};
const NotAuthorized = (HttpResponse, data, meta, log) => {
    return HttpResponse.status(401).json({
        code: 401,
        meta: metaDataContent(meta),
        message: 'not authorized',
        data,
        log,
    });
};
const NotPermission = (HttpResponse, data, meta, log) => {
    return HttpResponse.status(403).json({
        code: 403,
        meta: metaDataContent(meta),
        message: 'no permission',
        data,
        log,
    });
};
const NotFound = (HttpResponse, data, meta, log) => {
    return HttpResponse.status(404).json({
        code: 404,
        meta: metaDataContent(meta),
        message: 'not found',
        data,
        log,
    });
};
const BadRequest = (HttpResponse, log) => {
    return HttpResponse.status(400).json({
        code: 400,
        message: 'bad request',
        log,
    });
};
const TooManyRequests = (HttpRequest, // eslint-disable-line
HttpResponse, NextFunction, // eslint-disable-line
meta, log) => {
    return HttpResponse.status(429).json({
        code: 429,
        meta: metaDataContent(meta),
        message: 'too many requests',
    });
};
