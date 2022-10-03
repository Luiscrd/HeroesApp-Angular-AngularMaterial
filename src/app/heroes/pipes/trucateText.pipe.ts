import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'truncateLc' })
export class TruncatePipe implements PipeTransform {
  transform(value: string, long: number, activo: boolean): string {

    if (activo) {
      if (value.length <= long) {
        return value
      } else {
        value = value.substring(0, long) + '...'
        return value;
      }
    } else {
      return value;
    }

  }

}
