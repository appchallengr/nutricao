import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!value && !items) {
      return items;
    }
    return items.filter((item) => {
      const val = Object.keys(item.controls)[0];
      if (val && val.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        return true
      } else {
        return false;
      }
    });
  }
}
