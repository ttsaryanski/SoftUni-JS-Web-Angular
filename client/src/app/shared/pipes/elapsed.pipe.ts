import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'elapsedTime',
  standalone: true,
})
export class ElapsedPipe implements PipeTransform {
  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).fromNow();
  }
}
