import { Module } from '@nestjs/common';
import { ListCoursesService } from './service/course/list-courses/list-courses.service';

@Module({
  providers: [ListCoursesService],
})
export class DataModule {}
