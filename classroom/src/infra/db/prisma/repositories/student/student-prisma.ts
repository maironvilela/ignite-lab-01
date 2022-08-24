import { StudentDTO } from '~/data/dto';
import { FindStudentByIdRepository } from '~/data/protocols/db/student/find-student-by-id-repository';
import { PrismaService } from '../../prisma.service';

export class StudentPrismaRepository implements FindStudentByIdRepository {
  constructor(private prisma: PrismaService) {}
  async findStudentById(id: string): Promise<StudentDTO> {
    const student = this.prisma.student.findFirst({
      where: {
        authUserId: id,
      },
    });

    return student;
  }
}
