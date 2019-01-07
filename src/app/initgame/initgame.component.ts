import { Component } from '@angular/core';
import { ApiService } from '../httprequests/httprequests.service';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-init-root',
  templateUrl: './initgame.component.html',
  styleUrls: ['./initgame.component.css'],
  providers: [ApiService, DataService]
})
export class InitComponent {

  playerone;
  playertwo;
  game_id;
  response;

  constructor(private api:ApiService, private data: DataService){

    this.playerone = "";
    this.playertwo = "";
    // this.game_id = 0;
    this.data.currentGameId.subscribe(id_ => this.game_id = id_);
    this.data.currentPlayerOne.subscribe(name => this.playerone = name);
    console.log(this.game_id);

  }

  set_init_game = () =>{
    this.api.putPlayers(this.playerone, this.playertwo, this.game_id).subscribe(
    data => {
    this.response = data;
    },
    error => {
      console.log(error);
    }
  );
    this.data.setPlayerOne(this.playerone);
  }

  updateinit = () => {
    this.playerone = "";
    this.playertwo = "";
    this.game_id = this.game_id  + 1;

  }

}
