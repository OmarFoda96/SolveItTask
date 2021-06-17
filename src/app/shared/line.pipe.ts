import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'line'
})
export class LinePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
