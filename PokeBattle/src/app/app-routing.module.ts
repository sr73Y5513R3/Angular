import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BattlePokemonComponent } from './components/battle-pokemon/battle-pokemon.component';

const routes: Routes = [
  {path: 'battle', component: BattlePokemonComponent},
  {path: '', redirectTo: '/battle', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
