import { Component, Input, OnInit } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{


  //Hay que plantearlo de distinta manera no mostrando la lista
  //Si no que van a salir los dos pokemon y con un input en la vista
  //Va a ir cambiando el pokemon
  //Me falta poner un @Input() y en el onInit pues poner la idPokemon
  //Esto para despues utilizarlo en el battle-pokemon
  //Hay que hacer un @output donde sea el daño que va ha hacer
  //Y un metodo que calcule el daño del pokemon

  pokemonList: PokemonResponse[] = [];

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
