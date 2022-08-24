import { FindStudentByIdRepository } from '~/data/protocols/db/student/find-student-by-id-repository';
import { Student } from '~/domain/models/student';
import { FindStudentByIdUseCase } from '~/domain/usecases/student/find-student-by-id';

export class FindStudentByIdService implements FindStudentByIdUseCase {
  constructor(private findStudentByIdRepository: FindStudentByIdRepository) {}
  async execute(id: string): Promise<Student> {
    const student = await this.findStudentByIdRepository.findStudentById(id);

    return student;
  }
}
