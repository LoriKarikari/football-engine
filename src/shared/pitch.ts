export class Pitch {
  private height: number;
  private width: number;

  constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  public getHeight() {
    return this.height;
  }

  public getWidth() {
    return this.width;
  }
}
