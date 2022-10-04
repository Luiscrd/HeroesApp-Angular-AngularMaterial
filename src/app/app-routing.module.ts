import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { LogingGuard } from './auth/guards/loging.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canLoad: [ LogingGuard ],
    canActivate: [ LogingGuard ]
  },

  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canLoad: [ LogingGuard ],
    canActivate: [ LogingGuard ]
  },
  {
    path: '404',
    component: ErrorPageComponent,
    canLoad: [ LogingGuard ],
    canActivate: [ LogingGuard ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
