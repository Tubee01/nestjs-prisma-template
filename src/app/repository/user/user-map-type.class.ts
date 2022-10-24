import { Prisma } from '@prisma/client';
import { CrudMapType } from '../../interfaces/crud-map-type.interface';

export class UserMapType implements CrudMapType {
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;
}
