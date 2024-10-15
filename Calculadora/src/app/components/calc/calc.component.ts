import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {

  valor: string = "0";  
  valor1: string = "0";  
  resultado: number = 0;
  operacion: string = ""; 

  addNumber (num: string){
    if (this.valor === "0"){
      this.valor = num;
    }else{
      this.valor = this.valor.concat(num);
    }
  }

  borrarInput(){
    this.valor = "0";
  }

  borrarUnNumero(){
    if(this.valor.length<2){
      this.valor= "0";
    }else{
      this.valor = this.valor.slice(0, -1);
    }
  }
  
  seleccionarOperacion(op: string) {
    this.valor1 = this.valor;  
    this.operacion = op;  
    this.valor = "0";  
  }

  calcularResultado() {
    const num1 = Number(this.valor1);  
    const num2 = Number(this.valor);

    switch (this.operacion) {
      case "+":
        this.resultado = num1 + num2;
        break;
      case "-":
        this.resultado = num1 - num2;
        break;
      default:
        this.resultado = num2;
    }  
    this.valor = this.resultado.toString();
    this.operacion = "";  
  }

  imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZduW3SVmML3GcWWbKKYJbKpygrOPDc7Rtw&s";

  easterEgg(){
    alert("Que mirás bobo")
  }
}
