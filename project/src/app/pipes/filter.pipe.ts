import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], propertyName: string, query: string = ''): any[] {
    const arr = value.filter((a) => a[propertyName].includes(query.toLowerCase()));
    return arr;
  }

}
