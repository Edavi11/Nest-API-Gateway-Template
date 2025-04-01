import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LoggerHelper } from '../helpers/logger.helper';
import { randomUUID } from 'crypto';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip, headers, body } = req;

    const requestId = req.headers['x-request-id']?.toString() || randomUUID();
    req.headers['x-request-id'] = requestId; // En caso de reenviar

    const startTime = Date.now();

    res.on('finish', () => {
      const elapsedTime = Date.now() - startTime;
      const statusCode = res.statusCode;

      const log = {
        requestId,
        timestamp: new Date().toISOString(),
        method,
        path: originalUrl,
        statusCode,
        responseTimeMs: elapsedTime,
        ip,
        headers: {
          authorization: headers['authorization'],
          userAgent: headers['user-agent'],
        },
        body: method !== 'GET' ? body : undefined,
      };

      console.log('[API Gateway Request Log]', JSON.stringify(log, null, 2));

      LoggerHelper.writeLog(log);
    });

    next();
  }
}