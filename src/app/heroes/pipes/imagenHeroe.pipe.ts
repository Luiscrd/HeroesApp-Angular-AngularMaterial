import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({ name: 'imagehero' })
export class ImageHeroPipe implements PipeTransform {
  transform(heroe: Heroe, modificar:boolean): string {

    if(!heroe.id && heroe.alt_img === ''){
      return 'assets/img/no-image.png'
    } else if(heroe.id && heroe.alt_img != '' && heroe.alt_img != undefined) {
      return heroe.alt_img
    } else if( heroe.id && heroe.alt_img === undefined ){
      return `assets/heroes/${heroe.id}.jpg`
    } else if(heroe.id && heroe.alt_img === ''){
      return 'assets/img/no-image.png'
    } else {
      return 'assets/img/no-image.png'
    }
  }
}
