import { HeroeService } from './../../services/heroe.service';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { SujerenciaService } from '../../services/sujerencia.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: string = ''
  heroes: Heroe[] = []

  heroeSelecionado: Heroe | undefined;

  constructor(
    private heroesService: SujerenciaService,
    private heroeServiceId: HeroeService,
  ) { }

  ngOnInit(): void {

  }

  buscando() {
    if (this.termino) {
      this.heroesService.getHeroes(this.termino.trim()).subscribe(heroes => {

        this.heroes = heroes

      });
    }
  }

  opcionSelecionada(evento: MatAutocompleteSelectedEvent) {

    if(!evento){
      this.heroeSelecionado = undefined;
      return;
    }
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero;

    this.heroeServiceId.getHeroe(heroe.id!)
      .subscribe(heroe => this.heroeSelecionado = heroe);
  }

}
