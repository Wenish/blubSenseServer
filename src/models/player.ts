export class Player {
  constructor (
    public id: string,
    public health: number,
    public moveSpeed: number,
  ) {
    this.id = id;
    this.health = health;
    this.moveSpeed = moveSpeed;
  }

  static generate () {
    return new Player(
      'few32f34', //id
      health: 100, //hp
      5, //moveSpeed
    );
  }
}
