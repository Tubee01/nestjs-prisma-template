import { Module } from '@nestjs/common';
import { TemplateRepository } from './template.repository';

@Module({
  providers: [TemplateRepository],
  exports: [TemplateRepository],
})
export class TemplateRepositoryModule { }
