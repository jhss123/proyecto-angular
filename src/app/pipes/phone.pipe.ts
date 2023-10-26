/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '+591-'+value;
  }

}

/**
 * Created By : Sangwin Gawande (https://sangw.in)
 */