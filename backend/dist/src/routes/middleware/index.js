"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = middleware;
function middleware(_, HttpResponse, NextFunction) {
    HttpResponse.setHeader('X-C-Status', status || 'false');
    NextFunction();
}
