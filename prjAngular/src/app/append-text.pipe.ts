import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendText'
})
export class AppendTextPipe implements PipeTransform {

  transform(value: string, suffixValue: string): string {
    return value + suffixValue;
  }

}
