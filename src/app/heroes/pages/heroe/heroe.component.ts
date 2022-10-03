import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService } from '../../services/heroe.service';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private ativatedRoute: ActivatedRoute,
    private heroesService: HeroeService,

    ) { }

  ngOnInit(): void {

    this.ativatedRoute.params
    .pipe( switchMap( res => this.heroesService.getHeroe( res['id'] ) ) )
    .subscribe( heroe => this.heroe = heroe);

  }
}
