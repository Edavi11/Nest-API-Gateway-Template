// src/common/constants/bad-response.constant.ts
import { HttpStatus } from '@nestjs/common';
import { IErrorResponse } from '../interfaces/iresponse.factory';
import { ResponseFactory } from '../factories/response.factory';

export class BadResponse {
  static readonly ROUTE_NOT_FOUND: IErrorResponse = ResponseFactory.createErrorResponse( HttpStatus.NOT_FOUND, 'AG-404', 'Route Not Found');

  static readonly UNAUTHORIZED: IErrorResponse = ResponseFactory.createErrorResponse( HttpStatus.UNAUTHORIZED, 'AG-401', 'Unauthorized access');

  static readonly INTERNAL_ERROR: IErrorResponse = ResponseFactory.createErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR,'AG-500','An unexpected error occurred',);

  static readonly INVALID_HEADER = (headerName: string): IErrorResponse =>
    ResponseFactory.createErrorResponseFromTemplate( HttpStatus.BAD_REQUEST, 'AG-400', 'The header "{0}" is required or invalid', headerName );

  static readonly ENTITY_NOT_FOUND = (entity: string, id: string | number): IErrorResponse =>
    ResponseFactory.createErrorResponseFromTemplate( HttpStatus.NOT_FOUND, 'AG-404-ENTITY', 'The entity "{0}" with ID "{1}" was not found', entity, id);
}
