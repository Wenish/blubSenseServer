import { EntityMap } from 'colyseus';
import { Player } from '../../models/player';
import { Message } from '../../models/message';

export class State {
    players: EntityMap<Player> = {};
    counter: number;
    messages: EntityMap<string> = {};
    constructor () {
        this.players = {};
        this.counter = 0;
        this.messages = {};
    };

    addPlayer (client) {
        console.log('added player');
    };


    removePlayer (client) {
        console.log('removed player');
    };

    increaseCounter () {
        this.counter++;
    };

    addMessage (){

    };
};
