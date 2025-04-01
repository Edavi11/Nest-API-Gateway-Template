// src/common/factories/response.factory.ts
import { HttpStatus } from '@nestjs/common';
import { IErrorResponse, ISuccessResponse } from '../interfaces/iresponse.factory';

const MS_CODE = 'AG'; // acrónimo del microservicio

export class ResponseFactory {

  static createErrorResponse( statusCode: HttpStatus, internalCode: string, message: string, ): IErrorResponse {

    return {
      status_code: statusCode,
      success: false,
      internal_code: internalCode,
      message,
      ms: MS_CODE,
    };

  }

  static createErrorResponseFromTemplate( statusCode: HttpStatus, internalCode: string, template: string, ...args: any[] ): IErrorResponse {
    const message = this.format(template, ...args);
    return this.createErrorResponse(statusCode, internalCode, message);
  }

  static createSuccessResponse<T = any>( statusCode: HttpStatus, internalCode: string, message: string, data?: T, ): ISuccessResponse<T> {
    return {
      status_code: statusCode,
      success: true,
      internal_code: internalCode,
      message,
      ms: MS_CODE,
      data,
    };
  }

  private static format(template: string, ...args: any[]): string {
    return template.replace(/{(\d+)}/g, (_, index) =>
      typeof args[index] !== 'undefined' ? args[index] : `{${index}}`,
    );
  }
  
}
