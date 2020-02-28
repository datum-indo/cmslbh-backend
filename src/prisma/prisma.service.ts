import { Injectable } from '@nestjs/common';
import { Prisma } from './prisma.binding';
import * as dotenv from 'dotenv';
@Injectable()
export class PrismaService extends Prisma {
  constructor() {
    super({
      endpoint:
        'http://' + process.env.PRISMA_HOST + ':' + process.env.PRISMA_PORT,
      debug: false,
    });
  }
}
