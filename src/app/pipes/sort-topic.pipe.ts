import { STRING_TYPE } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopic',
})
export class SortTopicPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    // console.log("value " ,  value);
    // console.log("args " ,  args);

    return value.filter(
      (ele) => args.findIndex((e) => e.name == ele.topic) > -1
    );
  }
}
