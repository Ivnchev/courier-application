import { Pipe, PipeTransform } from '@angular/core';
import { Ipackage } from '../shared/interfaces';

@Pipe({
  name: 'searchFiler'
})
export class SearchFilerPipe implements PipeTransform {

  transform(records: Ipackage[], searchValue: string): Ipackage[] {

    if (!records || !searchValue) {
      return records
    }

    function search() {
      const trackingFilter = records.filter(x => x._id.toString().includes(searchValue.toLocaleLowerCase()))
      const addressFilter = records.filter(x => x.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      const packageFilter = records.filter(x => x.size.toString().includes(searchValue.toString()))
      const kilogramsFilter = records.filter(x => x.weight.toString() === searchValue.toLocaleLowerCase())
      const costFilter = records.filter(x => x.cost.toString() === searchValue.toLocaleLowerCase())

      return addressFilter.length > 0
        ? addressFilter
        : kilogramsFilter.length > 0
          ? kilogramsFilter
          : packageFilter.length > 0
            ? packageFilter
            : trackingFilter.length > 0
              ? trackingFilter
              : costFilter.length > 0
                  ? costFilter
                  : []
    }

    return search()
  }

}
