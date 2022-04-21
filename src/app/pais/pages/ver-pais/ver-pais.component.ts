import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _paisService: PaisService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap((params) => this._paisService.getPaisPorAlpha(params['id'])),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais[0];
      });
  }
}
