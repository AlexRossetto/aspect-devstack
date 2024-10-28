import { NextFunction, Request, Response } from 'express';

const metaDataContent = (meta?: any) => {
    return { timestamp: Date.now(), ...meta };
};

const OK = (HttpResponse: Response, data?: any, meta?: any) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'success',
        data,
    });
};

const OKNoContent = (HttpResponse: Response) => {
    return HttpResponse.status(204);
};

const NotAcceptable = (HttpResponse: Response, meta?: any) => {
    return HttpResponse.status(406).json({
        code: 406,
        meta: metaDataContent(meta),
        message: 'not acceptable',
    });
};

const InternalServerError = (HttpResponse: Response, meta?: any, log?: any) => {
    return HttpResponse.status(500).json({
        code: 500,
        meta: metaDataContent(meta),
        message: 'Internal Server Error',
        log,
    });
};

const LoginPassValid = (
    HttpResponse: Response,
    data?: any,
    meta?: any,
    log?: any,
) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'success',
        auth: true,
        data,
        log,
    });
};

const LoginPassInvalid = (HttpResponse: Response, meta?: any, log?: any) => {
    return HttpResponse.status(400).json({
        code: 400,
        meta: metaDataContent(meta),
        message: 'login or password invalid',
        auth: false,
        log,
    });
};

const Authorized = (
    HttpResponse: Response,
    data?: any,
    meta?: any,
    log?: any,
) => {
    return HttpResponse.status(200).json({
        code: 200,
        meta: metaDataContent(meta),
        message: 'authorized',
        data,
        log,
    });
};

const NotAuthorized = (
    HttpResponse: Response,
    data?: any,
    meta?: any,
    log?: any,
) => {
    return HttpResponse.status(401).json({
        code: 401,
        meta: metaDataContent(meta),
        message: 'not authorized',
        data,
        log,
    });
};

const NotPermission = (
    HttpResponse: Response,
    data?: any,
    meta?: any,
    log?: any,
) => {
    return HttpResponse.status(403).json({
        code: 403,
        meta: metaDataContent(meta),
        message: 'no permission',
        data,
        log,
    });
};

const NotFound = (
    HttpResponse: Response,
    data?: any,
    meta?: any,
    log?: any,
) => {
    return HttpResponse.status(404).json({
        code: 404,
        meta: metaDataContent(meta),
        message: 'not found',
        data,
        log,
    });
};

const BadRequest = (HttpResponse: Response, log?: any) => {
    return HttpResponse.status(400).json({
        code: 400,
        message: 'bad request',
        log,
    });
};

const TooManyRequests = (
    HttpRequest: Request, // eslint-disable-line
    HttpResponse: Response,
    NextFunction: NextFunction, // eslint-disable-line
    meta?: any,
    log?: any, // eslint-disable-line
) => {
    return HttpResponse.status(429).json({
        code: 429,
        meta: metaDataContent(meta),
        message: 'too many requests',
    });
};

export {
    OK,
    OKNoContent,
    NotAcceptable,
    InternalServerError,
    LoginPassValid,
    LoginPassInvalid,
    Authorized,
    NotAuthorized,
    NotPermission,
    NotFound,
    BadRequest,
    TooManyRequests,
};
