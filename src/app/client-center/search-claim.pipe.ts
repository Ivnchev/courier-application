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
            const usernameFilter = records.filter(x => x.username.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            const dateFilter = records.filter(x => x.dateOfCreation.includes(searchValue))
            const addressFilter = records.filter(x => x.address.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
            const packageFilter = records.filter(x => x.package.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))

            return usernameFilter.length > 0
                ? usernameFilter
                : dateFilter.length > 0
                    ? dateFilter
                    : addressFilter.length > 0
                        ? addressFilter
                        : packageFilter.length > 0
                            ? packageFilter
                            : []

        }


        return search()
    }

}
