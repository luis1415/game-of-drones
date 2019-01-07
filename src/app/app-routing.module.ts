import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InitComponent } from './initgame/initgame.component'
import { Round1 } from './round1/round1.component'

const router: Routes = [{path: 'initgame' , component: InitComponent},
  {path: 'round1', component: Round1}];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [InitComponent, Round1]
