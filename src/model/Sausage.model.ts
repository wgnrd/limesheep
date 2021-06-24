export class Sausage {
  public ingredients: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  public sum = 0;

  /**
   *
   * @param name Name of the sausage
   * @param recipe List with percantage of ingredients. Must add up to 100
   */
  constructor(public name: string, public recipe: number[]) {}
}
