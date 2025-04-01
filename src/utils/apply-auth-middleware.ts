import { Request, Response, NextFunction } from 'express';
import { AuthMiddleware } from '../common/middleware/auth.middleware'; // ajusta si cambias con alias

export async function maybeApplyAuthMiddleware(
  req: Request,
  res: Response,
  next: (err?: any) => void,
  route: any
) {
  if (route.auth) {
    const authMiddleware = new AuthMiddleware();
    return authMiddleware.use(req, res, next);
  }
  return next();
}
