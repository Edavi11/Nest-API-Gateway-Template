import { HttpStatus } from '@nestjs/common';
import { ISuccessResponse } from '../interfaces/iresponse.factory';
import { ResponseFactory } from '../factories/response.factory';

export class GoodResponse {
  static ok<T = any>( statusCode: HttpStatus, internalCode: string, message: string, data?: T, ): ISuccessResponse<T> {
    return ResponseFactory.createSuccessResponse<T>(
      statusCode,
      internalCode,
      message,
      data,
    );
  }
}
