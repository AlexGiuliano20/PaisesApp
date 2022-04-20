import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private _paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this._paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paises = res;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}
