import { Injectable, Pipe } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth | undefined{

    return this._auth

  }

  constructor( private http: HttpClient ) { }

  verificateAutentication(): Observable<boolean> {

    if(!localStorage.getItem('token')){
      return of(false);
    };

    // return of(true)
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map( auth => {
        this._auth = auth;
        return true;
      })
    );

  };

  vertificarionLogging(){

    if(!localStorage.getItem('token')){
      return of(true);
    };

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map( auth => {
        this._auth = auth;
        return true;
      })
    );

  }

  login(){

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      tap( auth => this._auth = auth,),
      tap( auth => localStorage.setItem('token', auth.id.toString() )),
    );

  };

  logout(){

    localStorage.removeItem('token');
    localStorage.clear();
    this._auth = undefined;

  };

}

