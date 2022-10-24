import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/app/prisma/prisma.service';
import { CrudService } from '../crud.service';
import { PostMapType } from './post-map-type.class';
import { Prisma } from '@prisma/client';

@Injectable()
export class PostRepository extends CrudService<
  Prisma.PostDelegate<unknown>,
  PostMapType
> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.post);
  }
}
