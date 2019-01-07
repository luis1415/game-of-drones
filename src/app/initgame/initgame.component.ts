import { Component } from '@angular/core';
import { ApiService } from '../httprequests/httprequests.service';

@Component({
  selector: 'app-init-root',
  templateUrl: './initgame.component.html',
  styleUrls: ['./initgame.component.css'],
  providers: [ApiService]
})
export class InitComponent {

  playerone;
  playertwo;
  game_id;
  response;

  constructor(private api:ApiService){

    this.playerone = "";
    this.playertwo = "";
    this.game_id = 0;

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
  }

  updateinit = () => {
    this.playerone = "";
    this.playertwo = "";
    this.game_id = this.game_id  + 1;

  }

}
