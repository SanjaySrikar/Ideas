import { STRING_TYPE } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopic',

})
export class SortTopicPipe implements PipeTransform {

  transform(value: any, args: any[]): any {

    if(args.length == 1){

      return value.filter((ele) =>ele.topic==args[0])
    }
    return value.filter((ele) =>
     args.findIndex(e => e == ele.topic) > -1)
  }

}
