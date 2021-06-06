import { Pipe, PipeTransform } from '@angular/core';
import { Ipackage } from '../shared/interfaces';

@Pipe({
  name: 'searchFiler'
})
export class SearchFilerPipe implements PipeTransform {

  transform(records: Ipackage[], searchValue: string): Ipackage[] {
    
    if(!records || !searchValue){
      return records
    }

    return records.filter(x => x.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) ||
    records.filter(x => x.packageSize.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) ||
    records.filter(x => x.kilograms.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
