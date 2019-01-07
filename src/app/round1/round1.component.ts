import { Component } from '@angular/core';
import { ApiService } from '../httprequests/httprequests.service';
import { InitComponent } from '../initgame/initgame.component';
import { DataService } from '../data/data.service';


@Component({
  selector: 'app-round1-root',
  templateUrl: './round1.component.html',
  styleUrls: ['./round1.component.css'],
  providers: [ApiService, InitComponent, DataService]
})
export class Round1 {

  turn;
  move;
  game_id;

  constructor(private api:ApiService, private data: DataService){


    this.turn = 1;
    this.move = "";
    this.data.currentGameId.subscribe(id_ => this.game_id = id_);
    console.log(this.game_id);
  }

  playRound = () => {


  }
}
