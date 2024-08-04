import { Module } from '@nestjs/common';
import { PracticeSetService } from './practiceSets.service';
import { PracticeSetResolver } from './practiceSets.resolver';

@Module({
  exports: [],
  imports: [PracticeSetService, PracticeSetResolver],
  providers: [],
})
export class PracticeSetsModule {}
