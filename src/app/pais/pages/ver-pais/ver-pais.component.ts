import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _paisService: PaisService
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params
      .pipe(
        switchMap((params) => this._paisService.getPaisPorAlpha(params['id']))
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
