import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResponse } from '../models/pokemon.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  getPokemon (id: number): Observable<PokemonResponse>{
    return this.http.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${id}`)
  }

  createBackImg (id:number): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/${id}.png`;
  }

  createFrontImg(id:number): string{
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${id}.png`;

  }

 
}
