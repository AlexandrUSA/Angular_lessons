import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: Array<any>, target: string, field: string = '') {
    if (!value.length || target === '') {
      return value;
    }
    return value.filter(el => {
      const item = field ? el[field] : el;
      return item.indexOf(target) !== -1;
    });
  }

}
