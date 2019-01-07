import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private game_id = new BehaviorSubject<number>(10);
  private playerone = new BehaviorSubject<string>('Player 1');
  private playertwo = new BehaviorSubject<string>('Player 2');

  currentGameId = this.game_id.asObservable();
  currentPlayerOne = this.playerone.asObservable();
  currentPlayerTwo = this.playertwo.asObservable();

  constructor() { }

  setGameID(game_id: number){
    this.game_id.next(game_id);
  }

  setPlayerOne(name: string){
    console.log(name);
    this.playerone.next(name);
  }


}

