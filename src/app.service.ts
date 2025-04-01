import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  async forwardRequest(req: Request, routeConfig: any) {

    const { method, headers, body, query } = req;

    const response = await firstValueFrom(
      this.httpService.request({
        url: routeConfig.target,
        method: method as any,
        headers: {
          ...headers,
          'x-request-id': headers['x-request-id'], // reenviamos el mismo requestId
        },
        data: body,
        params: query,
      }),
    );
    return { status: response.status, data: response.data };

  }
}
