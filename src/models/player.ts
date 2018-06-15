export class Player {

    public position: any = {
        x: "10",
        y: "5",
        z: "0"
    }
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
            100, //hp
            5, //moveSpeed
        );
    }
}
