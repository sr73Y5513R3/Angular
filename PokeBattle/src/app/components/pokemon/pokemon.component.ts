import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { PokemonResponse } from '../../models/pokemon.interface';
import { PokemonService } from '../../service/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {


  //Hay que plantearlo de distinta manera no mostrando la lista
  //Si no que van a salir los dos pokemon y con un input en la vista
  //Va a ir cambiando el pokemon
  //Me falta poner un @Input() y en el onInit pues poner la idPokemon
  //Esto para despues utilizarlo en el battle-pokemon
  //Hay que hacer un @output donde sea el daño que va ha hacer
  //Y un metodo que calcule el daño del pokemon



  @Input() life: number = 100;
  @Input() pokemonId: number | undefined;
  pokemon: PokemonResponse | undefined;
  @Output() onAttackDone = new EventEmitter<number>()
  @Input() isMyTurn: boolean = false;
  @Input() jugador: string = "";
  types: string[] = [];
  stats: number[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe(poke => {
      this.pokemon = poke

      this.types = poke.types.map(x => x.type.name)

      this.stats = poke.stats.map(x => x.base_stat)
    })

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["pokemonId"] && this.pokemonId) {
      this.pokemonService.getPokemon(this.pokemonId!).subscribe(poke => {
        this.pokemon = poke

        this.types = poke.types.map(x => x.type.name)
      })
    }
  }


  createBackImg(id: number): string {

    return this.pokemonService.createBackImg(id);

  }

  createFrontImg(id: number): string {
    return this.pokemonService.createFrontImg(id);

  }

  getProgressBarColor(): string {
    if (this.life >= 70) {
      return 'success';
    } else if (this.life >= 40) {
      return 'warning';
    } else {
      return 'danger';
    }
  }

  doAttack() {

    var attack = this.stats[2]

    var numRandm = Math.floor(Math.random() * (20 ) + 1);

    if(numRandm === 8){
      var damage = attack/3 + attack/5;
    }else {
      var damage = attack/3 + numRandm;
    }

    this.onAttackDone.emit(damage);

  }
}
