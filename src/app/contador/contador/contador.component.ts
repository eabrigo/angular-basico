import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1>{{ titulo }}</h1>

        <h2>Base: {{base}}</h2>

        <button (click)=" acumular(base); ">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(-base); ">-{{base}}</button>

    `
})

export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  public sumar() : void {
    this.numero+=1;
  }

  public restar() : void {
    this.numero-=1;
  }

  public acumular(valor: number) : void {
    this.numero+=valor;
  }

}