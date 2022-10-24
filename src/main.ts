import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './app/prisma/prisma.service';
import { Logger } from '@nestjs/common';
import { APP_DESCRIPTION, APP_NAME, PORT } from './common/contants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const logger = new Logger('Bootstrap');
  /**
   * Prisma @https://docs.nestjs.com/recipes/prisma#issues-with-enableshutdownhooks
   */
  const dbService = app.get(PrismaService);
  dbService.enableShutdownHooks(app);

  const options = new DocumentBuilder()
    .setTitle(`${configService.get(APP_NAME)} API`)
    .setDescription(
      `${configService.get(APP_DESCRIPTION) ?? 'API description'}`,
    )
    .setVersion(process.env.npm_package_version)
    .addTag('')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(configService.get(PORT));
  logger.log(`Server listening on port ${await app.getUrl()}`);
  logger.log(`Swagger on ${await app.getUrl()}/swagger`);
}
bootstrap();
