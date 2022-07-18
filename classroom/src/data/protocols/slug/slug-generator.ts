export interface SlugGenerator {
  generate(value: string): Promise<string>;
}
