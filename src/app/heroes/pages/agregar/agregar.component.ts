import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Heroe, Description } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ComfirmComponent } from '../../components/comfirm/comfirm.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DCComics',
      desc: 'DC Comics'
    },
    {
      id: 'MarvelComics',
      desc: 'Marvel Comics'
    }
  ]

  heroe: Heroe = {
    id: '',
    superhero: '',
    alter_ego: '',
    first_appearance: '',
    characters: [],
    description: [],
    alt_img: ''
  }

  value: string = '';
  descipValue: string = '';
  des!: Description;
  editar: boolean = false;
  borrarHeroe: boolean = false;
  cambioImg: boolean = false;


  constructor(
    private _ngZone: NgZone,
    private heroeService: HeroeService,
    private heroesService: HeroesService,
    private ativatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.editar = this.router.url.includes('editar');

    if (this.editar) {

      this.ativatedRoute.params
        .pipe(switchMap(res => this.heroeService.getHeroe(res['id'])))
        .subscribe(heroe => { this.heroe = heroe, this.editar = true });

      if (!this.heroe.alt_img) {
        this.heroe.alt_img = ''
      }
    }

  }

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  guardar() {

    // if (this.heroe.superhero.trim().length === 0) {
    //   return;
    // } else if (this.heroe.alter_ego.trim().length === 0) {
    //   return
    // } else if (this.heroe.first_appearance.trim().length === 0) {
    //   return
    // } else if (this.heroe.alt_img!.trim().length === 0) {
    //   return
    // } else if (this.heroe.publisher!.trim().length === 0) {
    //   return
    // }

    this.cambioImg = !this.cambioImg;

    if (!this.editar) {
      this.heroe.id = `${this.heroe.publisher?.split(' ')[0].toLowerCase()}-${this.heroe.superhero.split(' ')[0].toLowerCase()}`

      this.heroesService.getHeroes()
        .subscribe(heroes => {
          let num = 1;
          heroes.forEach(heroe => {
            console.log(this.heroe.id, heroe.id);

            if (this.heroe.id === heroe.id) {
              num += 1
              this.heroe.id = `${this.heroe.publisher?.split(' ')[0].toLowerCase()}-${this.heroe.superhero.split(' ')[0].toLowerCase()}${num}`
              console.log(this.heroe.id);

            }

          })

          this.heroeService.addtHeroe(this.heroe)
            .subscribe(res => {

              console.log('Agregado:', res);

            })

          this.mostrarSnackbar('Guardado correctamente')

          this.router.navigate(['/heroes/editar/', this.heroe.id])
          setTimeout(() => {
            this.router.navigate(['/heroes/listado'])
          }, 3000);


        })
    } else {

      this.heroeService.edittHeroe(this.heroe)
        .subscribe(res => {

          console.log('Actualizado:', res);

          this.mostrarSnackbar('Actualizado correctamente')

          setTimeout(() => {
            this.router.navigate(['/heroes/listado'])
          }, 3000);
          // this.router.navigate(['/heroes/editar/', this.heroe.id])

        })
    }
  }

  borrar(heroe: Heroe) {

    const dialog = this.dialog.open(ComfirmComponent, {
      width: '500px',
      data: heroe
    })

    dialog.afterClosed().subscribe(
      conf => {
        if (conf) {

          this.heroeService.deleteHeroe(this.heroe)
            .subscribe(res => {

              this.heroe = {
                id: '',
                superhero: '',
                alter_ego: '',
                first_appearance: '',
                characters: [],
                description: [],
                alt_img: ''
              }

              this.mostrarSnackbar('Borrado correctamente')

              this.borrarHeroe = false;

              setTimeout(() => {
                this.router.navigate(['/heroes/listado'])
              }, 3000);

              // this.router.navigate(['/heroes/editar/', this.heroe.id])

            })
        }
      }
    )

    console.log(this.borrarHeroe);



  }

  addCharacter(value: string) {

    this.heroe.characters.push(value);
    this.value = '';

  }

  addDescrip(descipValue: string) {

    this.des = {
      id: this.heroe.description.length,
      text: descipValue
    };

    this.heroe.description.push(this.des);

    this.descipValue = '';

  }

  mostrarSnackbar(mensaje: string) {

    this.snackBar.open(mensaje, 'Ok!!', { duration: 2000 })

  }


}
