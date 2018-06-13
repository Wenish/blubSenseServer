import * as THREE from 'three'
import { EntityMap } from 'colyseus';
import { Player } from '../../models/player';
import { Message } from '../../models/message';

export class State {
    players: EntityMap<Player> = {};
    counter: number = 0;
    messages: EntityMap<string> = {};
    scene: any = new THREE.Scene();
    constructor () {
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		var cube = new THREE.Mesh( geometry, material );
		this.scene.add( cube )
        //Do here some init stuff;
        console.log(this.scene);
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

    calculateState () {
        this.increaseCounter();
    };
};
