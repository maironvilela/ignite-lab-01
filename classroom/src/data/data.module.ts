import { Module } from '@nestjs/common';
import { AddCourseService } from './service/course/add-course/add-course.service';
import { ListCoursesService } from './service/course/list-courses/list-courses.service';

@Module({
  providers: [ListCoursesService, AddCourseService],
})
export class DataModule {}
