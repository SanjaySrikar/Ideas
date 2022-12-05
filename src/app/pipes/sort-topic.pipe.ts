
import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortTopic',
})

export class SortTopicPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    if(value == undefined || args == undefined) {
      return null;
    }
    return value.filter(
      (ele) => args.findIndex((e) => e.name == ele.topic) > -1
    );
  }
}
