import { Module } from '@nestjs/common';
import { ListCoursesService } from './service/course/list-courses/list-courses.service';
import { AddCourseService } from './service/add-course/add-course.service';

@Module({
  providers: [ListCoursesService, AddCourseService],
})
export class DataModule {}
