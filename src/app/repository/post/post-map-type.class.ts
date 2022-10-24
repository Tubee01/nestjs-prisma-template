import { Prisma } from '@prisma/client';
import { CrudMapType } from '../../interfaces/crud-map-type.interface';

export class PostMapType implements CrudMapType {
  create: Prisma.PostCreateArgs;
  delete: Prisma.PostDeleteArgs;
  findUnique: Prisma.PostFindUniqueArgs;
  update: Prisma.PostUpdateArgs;
}
