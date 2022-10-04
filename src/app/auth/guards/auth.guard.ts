import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // Quitar el ",pipe()" para ir a la ruta inicial
      return this.authService.verificateAutentication()
      .pipe(
        tap( autenticated => {
          if(!autenticated){
            this.router.navigate(['./heroes/listado'])
          }
        })
      )

  }

  constructor(

    private authService: AuthService,
    private router: Router,

    ){}

  canLoad(

    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      // Quitar el ",pipe()" para ir a la ruta inicial
      return this.authService.verificateAutentication()
      .pipe(
        tap( autenticated => {
          if(!autenticated){
            this.router.navigate(['./heroes/listado'])
          }
        })
      )

  }

}
