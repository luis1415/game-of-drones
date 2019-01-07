import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getAllGames(): Observable<any>{
    return this.http.get(this.baseurl + '/games/',
    {headers: this.HttpHeaders});
  }

  getOneGame(id): Observable<any>{
    return this.http.get(this.baseurl + '/games/' + id + '/',
    {headers: this.HttpHeaders});
  }

  updateGame(game): Observable<any>{
    const body = {id: game.id, name_player_1: game.name_player_1, name_player_2: game.name_player_2,
                  move_player_1: game.move_player_1, move_player_2: game.move_player_2, winner: game.winner};

    console.log(body);
    return this.http.put(this.baseurl + '/games/' + game.id + '/', body,
    {headers: this.HttpHeaders});
  }

  createGame(game): Observable<any>{
    const body = {id: game.id, name_player_1: game.name_player_1, name_player_2: game.name_player_2,
                  move_player_1: game.move_player_1, move_player_2: game.move_player_2, winner: game.winner};

    console.log(body);
    return this.http.post(this.baseurl + '/games/', body,
    {headers: this.HttpHeaders});
  }


  putPlayers(playerone, playertwo, game_id): Observable<any>{
    const body = {player_1: playerone,
                  player_2: playertwo,
                  id: game_id};

    console.log(body);
    return this.http.post(this.baseurl + '/initgame/' , body,
      {headers: this.HttpHeaders});

  }



}
