import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { TruncatePipe } from './pipes/trucateText.pipe';
import { HeroeTargetComponentComponent } from './components/heroe-target-component/heroe-target-component.component';
import { ImageHeroPipe } from './pipes/imagenHeroe.pipe';
import { FormsModule } from '@angular/forms';
import { ComfirmComponent } from './components/comfirm/comfirm.component';




@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    TruncatePipe,
    HeroeTargetComponentComponent,
    ImageHeroPipe,
    ComfirmComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
  ]
})
export class HeroesModule { }
