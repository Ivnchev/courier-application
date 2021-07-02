import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText'
})
export class TrimTextPipe implements PipeTransform {

  transform(value: string): string {
    return value.length > 30 ? value.substring(0, 30) + '...' : value
  }

}
