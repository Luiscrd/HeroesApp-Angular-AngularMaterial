import { Component, Input } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-heroe-target-component',
  templateUrl: './heroe-target-component.component.html',
  styleUrls: ['./heroe-target-component.component.css']
})
export class HeroeTargetComponentComponent {

  @Input() heroe: Heroe = {
    id: '',
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: [],
    description: []
  }

  get auth(){

    return this.authService.auth;

  }

  constructor(
    private authService: AuthService,

    ){}

  ngOnInit(): void {

  }




}
