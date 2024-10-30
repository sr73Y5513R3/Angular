import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{
  
  pokemonList: Pokemon[] = []

  constructor(private servicioPokeon: PokemonService){}
  
  ngOnInit(): void {
    this.servicioPokeon.getPokemonList().subscribe(x =>{
      this.pokemonList = x.results;
    })
  }

  getIdPokemon (url: string) : string{
    return url.split('/').filter(x => x).pop() || '0';
  }
}
