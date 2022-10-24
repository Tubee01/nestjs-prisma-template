import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { CrudService } from '../base-crud.service';
import { TemplateMapType } from './template-map-type.class';
import { Prisma } from '@prisma/client'

@Injectable()
export class TemplateRepository extends CrudService<
  Prisma.TemplateDelegate<unknown>,
  TemplateMapType
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.template);
  }
}
