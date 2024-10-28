import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../models/pokemon.interface';
import { Observable } from 'rxjs';
import { PokemonDetails } from '../models/pokemonDetails.interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemonList(): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon?limit=898`);
  }

  getPokemonDetails (id: number){
    return this.http.get<PokemonDetails>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  createBackImg (id:number): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`;
  }

  createImg(id:number): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  }
}
