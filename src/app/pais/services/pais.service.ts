import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _regionesUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,cca2,alpha2Code,flags,population'
    );
  }
  constructor(private _http: HttpClient) {}

  buscarPais(pais: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${pais}`;
    return this._http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(capital: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${capital}`;
    return this._http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._regionesUrl}/regionalbloc/${region}`;
    return this._http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
