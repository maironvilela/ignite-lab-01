import { Student } from '~/domain/models/student';

export interface FindStudentByIdUseCase {
  execute(id: string): Promise<Student>;
}
