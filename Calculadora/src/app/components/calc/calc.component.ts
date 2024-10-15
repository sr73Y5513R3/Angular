import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  //calculadora button
  uno = "1";
  dos = "2";
  tres = "3";
  cuatro = "4";
  cinco = "5";
  seis = "6";
  siete = "7";
  ocho = "8";
  nueve = "9";
  cero = "0";


  valor = "0";
  resultado = 0;
  sumar = false

  addNumber (num: string){
    this.valor = this.valor.concat(num);
  }

  borrarImput(){
    this.valor = "0";
  }
  
  /*sumarNumeros(valor: String){
    valor1= valor.;
    this.sumar = true;
  }*/

  
}
