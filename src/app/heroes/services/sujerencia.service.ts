import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SujerenciaService {

  constructor( private http: HttpClient ) { }

  getHeroes( termino:string ): Observable<Heroe[]> {

    return this.http.get<Heroe[]>(environment.baseUrl + `/heroes?q=${ termino }&_limit=6`)

  }

}
