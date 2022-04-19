import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';
  hayError: boolean = false;

  constructor(private _paisService: PaisService) {}

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this._paisService.buscarPais(this.termino).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
