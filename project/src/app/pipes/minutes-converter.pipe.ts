import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesConverter'
})
export class MinutesConverterPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const mins = Math.floor(value % 60);
    const hoursStr = hours ? `${hours.toString()} h` : '';
    const minsStr = mins ? `${mins.toString()} min` : '';
    return `${hoursStr} ${minsStr}`;
  }

}
