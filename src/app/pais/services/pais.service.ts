import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiUrl: string = 'https://restcountries.com/v3.1';
  private _regionesUrl: string = 'https://restcountries.com/v2';

  constructor(private _http: HttpClient) {}

  buscarPais(pais: string): Observable<Country[]> {
    const url = `${this._apiUrl}/name/${pais}`;
    return this._http.get<Country[]>(url);
  }

  buscarCapital(capital: string): Observable<Country[]> {
    const url = `${this._apiUrl}/capital/${capital}`;
    return this._http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._regionesUrl}/regionalbloc/${region}`;
    return this._http.get<Country[]>(url);
  }
}
