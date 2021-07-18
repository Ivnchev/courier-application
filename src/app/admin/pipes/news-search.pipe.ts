import { Pipe, PipeTransform } from '@angular/core';
import { INews } from 'src/app/shared/interfaces';

@Pipe({
  name: 'newsSearch'
})
export class NewsSearchPipe implements PipeTransform {

  transform(records: INews[], searchValue: string): INews[] {

    if (!records || !searchValue) {
      return records
    }

    function search() {
      const titleFilter = records.filter(x => x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      const descriptionFilter = records.filter(x => x.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

      return titleFilter.length > 0
        ? titleFilter
        : descriptionFilter.length > 0
          ? descriptionFilter
          : []
    }

    return search()
  }

}
