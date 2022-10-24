import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { CrudService } from '../crud.service';
import { UserMapType } from './user-map-type.class';
import { Prisma, PrismaPromise, User } from '@prisma/client';

@Injectable()
export class UserRepository extends CrudService<
  Prisma.UserDelegate<unknown>,
  UserMapType
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.user);
  }

  findAll<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs> = undefined,
  ): PrismaPromise<User[]> {
    const prismaQuery: Prisma.UserFindManyArgs = {
      ...args,
    };
    return this.prismaService.user.findMany(prismaQuery);
  }
}
