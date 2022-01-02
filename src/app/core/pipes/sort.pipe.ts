import { Pipe, PipeTransform } from '@angular/core';
import { Igood } from '../interfaces/goods';
export type sortField='rating' | 'price'
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Igood[], field: sortField | ''): Igood[] {
    if(!field){
      return array
    }
    array.sort((a,b)=>{
      return b[field] - a[field]
    })
    return array;
  }

}
