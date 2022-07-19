import { SlugGenerator } from "~/data/protocols";

export class SlugGenerateImp implements SlugGenerator {
  async generate(value: string): Promise<string> {
    return value.replace(" ", "-");
  }
}
