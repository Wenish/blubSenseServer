export class Message {
    constructor (
        public text: string,
    ) {
        this.text = text;
    }

    static generate () {
        return new Message(
            text: Math.random().toString(),
        );
    }
}
