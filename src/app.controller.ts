import { Controller, All, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { routes } from './config/routes.config';
import { BadResponse } from './common/responses/bad-response';
import { GoodResponse } from './common/responses/good-response';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) { }

  @All('*')
  async proxy(@Req() req, @Res() res) {

    const route = routes.find(r => r.path === req.path && r.methods.includes(req.method.toUpperCase()))

    if (!route) {
      return res.status(404).json(BadResponse.ROUTE_NOT_FOUND)
    }

    try {
      const response = await this.appService.forwardRequest(req, route);
      return res.status(response.status).json(response.data);

    } catch (error) {
      return res.status(error.response?.status || 500).json(BadResponse.INTERNAL_ERROR);
    }
  }
}
