import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appfilter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchText: string): unknown {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLocaleLowerCase();
    return value.filter((it) => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
