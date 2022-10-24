import { Prisma } from '@prisma/client'
import { CrudMapType } from '../../interfaces/crud-map-type.interface';

export class TemplateMapType implements CrudMapType {
  create: Prisma.TemplateCreateArgs;
  delete: Prisma.TemplateDeleteArgs;
  findUnique: Prisma.TemplateFindUniqueArgs;
  update: Prisma.TemplateUpdateArgs;
}
