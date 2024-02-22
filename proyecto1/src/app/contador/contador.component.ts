import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  public contador : number = 100;
  
  //Si no pones un valor, por defecto es 1
  public incrementa(cantidad : number = 1) : void{
    this.contador += cantidad;
  }

  //Si no pones un valor, por defecto es 1
  public decrementa(cantidad : number = 1) : void{
    this.contador -= cantidad;
  }
}
