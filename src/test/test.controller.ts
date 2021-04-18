import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    async getHello(): Promise<any> {
        return "hello"
    }
}
