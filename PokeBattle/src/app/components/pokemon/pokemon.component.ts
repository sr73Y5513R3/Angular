import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{

  pokemonList: Pokemon[] = [];

  constructor(private pokemonService : PokemonService){}
 
  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(respuesta =>{
      this.pokemonList = respuesta.results;
    })
  }

  getPokemonId(url: string): number{

    return parseInt(url.split('/').filter(x => x).pop() || '0');

  };

  createBackImg(id: number): string {

    return this.pokemonService.createBackImg(id);

  }

}
