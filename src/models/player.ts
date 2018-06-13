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
            Math.random().toString(), //id
            health: 100, //hp
            5, //moveSpeed
        );
    }
}
