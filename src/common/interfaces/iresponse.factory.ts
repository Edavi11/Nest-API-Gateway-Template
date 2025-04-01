export interface IErrorResponse {
  status_code: number;
  success: false;
  internal_code: string;
  message: string;
  ms: string;
}

export interface ISuccessResponse<T = any> {
  status_code: number;
  success: true;
  internal_code: string;
  message: string;
  ms: string;
  data?: T;
}
