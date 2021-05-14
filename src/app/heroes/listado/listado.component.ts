import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['Batman','Superman','El Chapulin Colorado','Super Hijitus'];
  public heroeBorrado: string = "";

  public borrar(index: number) : void {
    const heroeBorrado=this.heroes.splice(index,1);
    this.heroeBorrado=heroeBorrado[0];
    console.log(heroeBorrado[0]);
  }

}
