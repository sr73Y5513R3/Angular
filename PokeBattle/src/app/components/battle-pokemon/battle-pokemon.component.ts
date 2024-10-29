import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-battle-pokemon',
  templateUrl: './battle-pokemon.component.html',
  styleUrl: './battle-pokemon.component.css'
})
export class BattlePokemonComponent {
  
  //Hay que hacerlo con turnos con el pokemonTurn = 1; y que vaya cambiando
  //Metodo de apply damage que viene del output

  //Hacer un pokemonP1 con un id
}
