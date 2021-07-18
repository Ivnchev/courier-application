import { Pipe, PipeTransform } from '@angular/core';
import { ISupQuestion } from 'src/app/shared/interfaces/support-question';

@Pipe({
  name: 'supportQuestionSearch'
})
export class SupportQuestionSearchPipe implements PipeTransform {

  transform(records: ISupQuestion[], searchValue: string): ISupQuestion[] {

    if (!records || !searchValue) {
      return records
    }

    function search() {
      const titleFilter = records.filter(x => x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      const emailFilter = records.filter(x => x.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
      const descriptionFilter = records.filter(x => x.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

      return titleFilter.length > 0
        ? titleFilter
        : descriptionFilter.length > 0
          ? descriptionFilter
          : emailFilter.length > 0
            ? emailFilter
            : []
    }

    return search()
  }

}
