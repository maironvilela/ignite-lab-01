import { Module } from "@nestjs/common";
import { DataModule } from "~/data/data.module";
import { ListCoursesController } from "./controllers/list-courses";

@Module({
  providers: [ListCoursesController],
  imports: [DataModule],
})
export class PresentationModule {}
