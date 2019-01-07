import { Component } from '@angular/core';
import { ApiService } from './httprequests/httprequests.service';
import { shiftInitState } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  games = [{'winner': 'Luis'}];
  selectedGame;

  constructor(private api:ApiService){
    this.getGames();
    this.selectedGame = {id: 0, name_player_1: '', name_player_2: '', move_player_1: '', move_player_2: '', winner: '1'};
  }
  getGames = () =>{
    this.api.getAllGames().subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  GameClicked = (game) =>{
    this.api.getOneGame(game.id).subscribe(
      data => {
        console.log(data);
        this.selectedGame = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateGame = () =>{
    this.api.updateGame(this.selectedGame).subscribe(
      data => {
        this.selectedGame = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  createGame = () =>{
    this.api.createGame(this.selectedGame).subscribe(
      data => {
        this.games.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
