import { Pipe, PipeTransform } from '@angular/core';
import { IClaim } from '../shared/interfaces';

@Pipe({
  name: 'searchClaim'
})
export class SearchClaimPipe implements PipeTransform {

  transform(records: IClaim[], searchValue: string): IClaim[] {
    if(!records || !searchValue){
      return records
    }

    return records.filter(x => x.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) ||
    records.filter(x => new Date(x.dateOfCreation) == new Date(searchValue)) ||
    records.filter(x => x.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) ||
    records.filter(x => x.package.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
