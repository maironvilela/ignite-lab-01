import { Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../infra/db/prisma/prisma.service';
import { Course } from './course';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => [Course])
  async hello() {
    return await this.prisma.course.findMany();
  }
}
