import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../service/pokemon.service';
import { PokemonDetails } from '../../models/pokemonDetails.interface';

@Component({
  selector: 'app-battle-pokemon',
  templateUrl: './battle-pokemon.component.html',
  styleUrl: './battle-pokemon.component.css'
})
export class BattlePokemonComponent implements OnInit{

  pokemonCpu: number = 493;
  pokemonUsuario: PokemonDetails |undefined;
  turno: boolean = true

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private servicioPokemon: PokemonService){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')

    this.getPokemonUsuario(+id!).subscribe(response =>{
      this.pokemonUsuario = response

      
    })
  }
  
  getPokemonCpu(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonCpu}`)
  }

  getPokemonUsuario(id:number){
    return this.servicioPokemon.getPokemonDetails(id);
  }
}
