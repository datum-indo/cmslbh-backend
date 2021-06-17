import {
  Controller,
  Get,
  Post,
  Res,
  Query,
  HttpException,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Param } from '@nestjs/common';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import moment from 'moment';
import {
  MtVocabGroupWhereInput,
  MtVocabWhereInput,
} from './prisma/prisma.binding';
import { MTVocabResolver } from './resolver/mtvocab.resolver';
import { MysqlService } from './mysql.service';
import { json2csvAsync } from 'json-2-csv';
import * as NodeGeocoder from 'node-geocoder';
import { PrismaService } from './prisma.service';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mysqlService: MysqlService,
    private prismaService: PrismaService
  ) { }

  @Get()
  async getHello(): Promise<any> {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(3)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          const removeSpace = file.originalname
            .replace(/ /g, '_')
            .replace(extname(file.originalname), '');
          const currentDate = moment().format('YYYYMMDD');
          return cb(
            null,
            `${currentDate}_${removeSpace}_${randomName}${extname(
              file.originalname,
            )}`,
          );
        },
      }),
    }),
  )
  uploadAvatar(@UploadedFile() file) {
    return file;
  }

  @Get('files/:fileId')
  serveAvatar(@Param('fileId') fileId, @Res() res): any {
    res.sendFile(fileId, { root: 'files' });
  }

  @Post('query')
  async queryAnalisa(@Body('query') query: string) {
    const result = await this.mysqlService.processQuery(query);
    // console.log(result);
    if (!result) {
      return [];
    }
    return result;
  }

  @Post('query-prisma')
  async queryAnalisaPrisma(@Body('query') query: string) {
    console.log(query)
    const result = await this.prismaService.$queryRaw(query);
    console.log(result);
    if (!result) {
      return [];
    }
    return result;
  }

  @Post('query/sebaran')
  async querySebaranPrisma(@Body('query') query: string, @Body('template') templateName: string) {
    const template = await this.prismaService.$queryRaw(`select template from src_template where name = '${templateName}'`)
    if (!template) {
      return [];
    }
    console.log(`${template[0].template} where ${query}`)
    const result = await this.prismaService.$queryRaw(`${template[0].template} where ${query}`)
    if (!result) {
      return [];
    }
    return result;
  }

  @Post('query/csv')
  async queryCSV(
    @Body('query') query: string,
    @Body('template') templateId: string,
    @Res() res,
  ) {
    const template = await this.prismaService.$queryRaw(`select template from src_template where id = '${templateId}'`)
    if (!template) {
      return [];
    }
    const result = await this.prismaService.$queryRaw(`${template[0].template} where ${query}`)
    if (!result) {
      return [];
    }
    const csv = await json2csvAsync(result);
    res.set('Content-Type', 'application/csv');
    res.set(
      'Content-Disposition',
      `attachment; filename=analisa-${moment().format()}.csv`,
    );
    res.send(Buffer.from(csv));
  }

  @Post('geocode')
  async geocoder(@Body('param') param: any) {
    // const result = await this.mysqlService.processQuery(query);
    try {
      // console.log('requestyer');
      const options = {
        provider: 'google',

        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'AIzaSyA1bbmnwu6pfsHXI8r2aXzHgNYOvq2EStI', // for Mapquest, OpenCage, Google Premier
        formatter: null, // 'gpx', 'string', ...
      };
      const geocoder = NodeGeocoder(options);

      const result = await geocoder.geocode(param);
      if (!result) {
        return null;
      }
      return result;
    } catch (err) {
      // console.log(err);
      return null;
    }
  }

  @Post('applicationdoc')
  async applicationDoc(@Body('param') param: any, @Res() res) {
    // console.log(param.clients[0].personId);
    let PizZip = require('pizzip');
    let Docxtemplater = require('docxtemplater');

    let fs = require('fs');
    let path = require('path');

    //Load the docx file as a binary
    let content = fs.readFileSync(path.resolve('bphn_template.docx'), 'binary');

    let zip = new PizZip(content);

    let doc = new Docxtemplater();
    doc.loadZip(zip);

    //set the templateVariables
    doc.setData({
      no_reg: param.noReg,
      tgl_reg: moment(param.regDate).format('DD-MM-YYYY'),
      nama_wakil: param.wakilId !== null ? param.wakilId.namaLengkap : '',
      alamat_wakil: param.wakilId !== null ? param.wakilId.alamatId : '',
      hubungan_pemohon:
        param.relasiWakilClient !== null ? param.relasiWakilClient : '',
      nama_klien:
        param.clients[0].personId.namaLengkap !== null
          ? param.clients[0].personId.namaLengkap
          : '',
      tempat_tgl_lahir: `${param.clients[0].personId.tmpLahir !== null
        ? param.clients[0].personId.tmpLahir
        : ''
        } ${param.clients[0].personId.tglLahir !== null
          ? moment(param.clients[0].personId.tglLahir).format('DD-MM-YYYY')
          : ''
        }`,
      alamat:
        param.clients[0].personId.alamatId !== null
          ? param.clients[0].personId.alamatId
          : '',
      pekerjaan:
        param.clients[0].personId.pekerjaan !== null
          ? param.clients[0].personId.pekerjaan
          : '',
      tanda_pengenal:
        param.clients[0].personId.jenisId !== null
          ? param.clients[0].personId.jenisId
          : '',
      nomor_identitas: param.clients[0].personId.nomorId
        ? param.clients[0].personId.nomorId
        : '',
      sktm:
        param.clients[0].stmKeterangan !== null
          ? param.clients[0].stmKeterangan
          : '',
      uraian: param.dudukPerara !== null ? param.dudukPerara : '',
      year: moment().format('YYYY'),
      wakil_klien:
        param.wakilId !== null
          ? param.wakilId.namaLengkap
          : param.clients[0].personId.namaLengkap,
    });

    try {
      // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
      doc.render();
    } catch (error) {
      // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object).
      let e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties,
      };
      // console.log(JSON.stringify({ error: e }));
      if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors
          .map(function (error) {
            return error.properties.explanation;
          })
          .join('\n');
        // console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this :
        // 'The tag beginning with "foobar" is unopened'
      }
      return null;
    }

    let buf = doc.getZip().generate({ type: 'nodebuffer' });

    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    res.set('Content-Type', 'application/docx');
    res.set(
      'Content-Disposition',
      `attachment; filename=bphn-${moment().format()}.docx`,
    );
    res.send(Buffer.from(buf));
  }
}
