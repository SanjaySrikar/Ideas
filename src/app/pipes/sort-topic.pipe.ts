
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopic',
})

export class SortTopicPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if(value == undefined || args == undefined) {
      return value;
    }
    if(args.length === 0) {
      return value;
    }
    return value.filter(
      (ele) => args.findIndex((e) => e.name == ele.topic) > -1
    );
  }
}
