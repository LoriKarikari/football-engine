export class Ball {
  private xCoord: number;
  private yCoord: number;

  constructor(xCoord: number, yCoord: number) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  public setPosition(xCoord: number, yCoord: number) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }

  public getPosition() {
    return [this.xCoord, this.yCoord];
  }
}
