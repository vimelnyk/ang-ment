import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], propertyName: string, reverse?: boolean ): any[] {
    if (!value || value.length <= 1) { return value; }
    if (propertyName && !reverse){
      const arr = value.sort((a: any, b: any) => (a[propertyName] > b[propertyName]) ? -1 : ((b[propertyName] > a[propertyName]) ? 1 : 0));
      return arr;
    } else if (propertyName && reverse) {
      const arr = value.sort((a: any, b: any) => (a[propertyName] > b[propertyName]) ? 1 : ((b[propertyName] > a[propertyName]) ? -1 : 0));
      return arr;
    } else {
      return value;
    }
  }
}
