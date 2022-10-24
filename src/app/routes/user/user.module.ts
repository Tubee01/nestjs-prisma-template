import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RepositoryModule } from 'src/app/repository/repository.module';
import { UserRepository } from 'src/app/repository/user/user.repository';

@Module({
  imports: [RepositoryModule.forFeature(UserRepository)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
