import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByString',
})
export class SortByStringPipe implements PipeTransform {
  transform(value: any[], ...args: string[]): any[] {
    // console.log(value,args);
    if(args[1] != undefined){
      let result = value.filter(ele => ele.name == args[1])
      if (args[0] == 'upVotes') {
        return result.sort((n1, n2) => {
          return n2.upVotes - n1.upVotes;
        });
      } else if (args[0] == 'downVotes') {
        return result.sort((n1, n2) => {
          return n2.downVotes - n1.downVotes;
        });
    }
  }
    if (args[0] == 'upVotes') {
      return value.sort((n1, n2) => {
        return n2.upVotes - n1.upVotes;
      });
    } else if (args[0] == 'downVotes') {
      return value.sort((n1, n2) => {
        return n2.downVotes - n1.downVotes;
      });
    } else {
      if (args[1] != undefined) {
        let result = value.filter(ele => ele.name == args[1])
        return result.sort(function (a, b) {
          let x = a[args[0]].toLowerCase();
          let y = b[args[0]].toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      } else {
        return value.sort(function (a, b) {
          let x = a[args[0]].toLowerCase();
          let y = b[args[0]].toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        });
      }
    }
  }
}
