import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { BadResponse } from '../responses/bad-response';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: NextFunction) {

    const requestId = req.headers['x-request-id']?.toString();
    req['requestId'] = requestId;

    const token = req.headers['authorization']?.split(' ')[1];
    const secret = process.env.JWT_SECRET;
    const algorithm = process.env.JWT_ALGORITHM || 'HS256';

    if (!token || !secret) {
      return res.status(401).json(BadResponse.UNAUTHORIZED);
    }

    try {
      const payload = jwt.verify(token, secret, { algorithms: [algorithm as jwt.Algorithm] });
      req['user'] = payload;
      next();
    } catch (err) {
      return res.status(401).json(BadResponse.UNAUTHORIZED);
    }
  }
}
