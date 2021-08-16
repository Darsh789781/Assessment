import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../employee-model';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): Employee[] {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter(item => {
      return Object.keys(item).some(key => {
        return String(item[key]).toLowerCase().includes(searchText.toLowerCase());
      });
    });
   }

}
