import { Controller, Get, Post, Request, UseGuards, Req, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ReqToken } from './interfaces/req-token.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('token')
  async createToken(@Body() reqs: ReqToken): Promise<any> {
    // console.log(reqs);
    return await this.authService.createToken(reqs);
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll() {
    // this route is restricted by AuthGuard
    // JWT strategy
  }
}
