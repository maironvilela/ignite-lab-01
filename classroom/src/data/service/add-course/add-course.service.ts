import { Injectable } from '@nestjs/common';

@Injectable()
export class AddCourseService {
  async addCourse() {
    console.log('Teste');
  }
}
