import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopic',

})
export class SortTopicPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    console.log(value, args)
    return value.filter((ele) =>
     args.findIndex(e => e == ele.topic) > -1)
  }

}
