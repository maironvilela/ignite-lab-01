import { StudentDTO } from '~/data/dto';

export interface FindStudentByIdRepository {
  findStudentById(id: string): Promise<StudentDTO>;
}
