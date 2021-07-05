import { Pipe, PipeTransform } from '@angular/core';
import { IClaim } from '../shared/interfaces';

@Pipe({
    name: 'searchClaim'
})
export class SearchClaimPipe implements PipeTransform {

    transform(records: IClaim[], searchValue: string): IClaim[] {
        if (!records || !searchValue) {
            return records
        }
        function search() {
            const trackingFilter = records.filter(x => x.trackingNumber._id.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            const titleFilter = records.filter(x => x.title.includes(searchValue.toLocaleLowerCase()))
            const dateFilter = records.filter(x => x.createdAt.toString().includes(searchValue))
            const descriptionFilter = records.filter(x => x.description.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

            return trackingFilter.length > 0
                ? trackingFilter
                : titleFilter.length > 0
                    ? titleFilter
                    : dateFilter.length > 0
                        ? dateFilter
                        : descriptionFilter.length > 0
                            ? descriptionFilter
                            : []

        }


        return search()
    }

}
