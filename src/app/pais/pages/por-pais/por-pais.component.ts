import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = 'Hola Mundo';

  constructor(private _paisService: PaisService) {}

  buscar() {
    console.log(this.termino);

    this._paisService
      .buscarPais(this.termino)
      .subscribe((res) => console.log(res));
  }
}
