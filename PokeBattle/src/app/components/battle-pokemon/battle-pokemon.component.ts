import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-battle-pokemon',
  templateUrl: './battle-pokemon.component.html',
  styleUrl: './battle-pokemon.component.css'
})
export class BattlePokemonComponent {
  
  //Hay que hacerlo con turnos con el pokemonTurn = 1; y que vaya cambiando
  //Metodo de apply damage que viene del output

  //Hacer un pokemonP1 con un id



  jugador1 = "pokemonP1"
  jugador2 = "pokemonP2"
  pokemonTurn = Math.floor(Math.random() * (2) + 1);
  pokemonP1 = 169;
  pokemonP2 = 180;
  lifeP1 = 100;
  lifeP2 = 100;
  defensaPokemon = 0;




  reiniciarBatalla (){
    this.lifeP1 = 100
    this.lifeP2 = 100

    this.pokemonTurn = Math.floor(Math.random() * (2) + 1);
  }

  reiniciarBatallaRandom (){
    this.lifeP1 = 100
    this.lifeP2 = 100

    this.pokemonP1 = Math.floor(Math.random() * (898) + 1);
    this.pokemonP2 = Math.floor(Math.random() * (898) + 1);
  }

  checkLife(pokemonLife: number, opponentName: string) {
   
    if (pokemonLife <= 0) {
        alert(`${opponentName} gana!`);
    }
}

  applyDamage(damage: number) {
    if (this.pokemonTurn == 1) {
      this.lifeP2 -= damage;
      this.pokemonTurn = 2;
      this.checkLife(this.lifeP2, this.jugador1)
    } else {
      this.lifeP1 -= damage;
      this.pokemonTurn = 1;
      this.checkLife(this.lifeP1, this.jugador2)
    }
  }
}
