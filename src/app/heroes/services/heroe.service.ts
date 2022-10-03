import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeroeService {

  constructor( private http: HttpClient ) { }

  getHeroe( id:string ): Observable<Heroe> {

    return this.http.get<Heroe>(environment.baseUrl + '/heroes/' + id)

  }

  addtHeroe( heroe: Heroe ): Observable<Heroe> {

    return this.http.post<Heroe>(environment.baseUrl + '/heroes', heroe)

  }

  edittHeroe( heroe: Heroe ): Observable<Heroe> {

    return this.http.put<Heroe>(environment.baseUrl + '/heroes/'+ heroe.id, heroe)

  }

  deleteHeroe( heroe: Heroe ): Observable<Heroe> {

    return this.http.delete<Heroe>(environment.baseUrl + '/heroes/'+ heroe.id)

  }

}
