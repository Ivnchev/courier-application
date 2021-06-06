import { Pipe, PipeTransform } from '@angular/core';
import { IQuestion } from '../shared/interfaces';

@Pipe({
  name: 'searchQuestion'
})
export class SearchQuestionPipe implements PipeTransform {

  transform(records: IQuestion[], searchValue: string): IQuestion[] {
    if(!records || !searchValue){
      return records
    }

    return records.filter(x => x.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

}
