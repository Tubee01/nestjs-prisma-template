import { DynamicModule } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

export class RepositoryModule {
  static forFeature(...repositories): DynamicModule {
    const providers = repositories.map((service) => ({
      provide: service,
      useClass: service,
    }));
    return {
      module: RepositoryModule,
      imports: [PrismaModule],
      providers: providers,
      exports: providers,
    };
  }
}
