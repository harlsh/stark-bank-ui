import { Pipe, PipeTransform } from '@angular/core';
import { Branch } from './Branch';

@Pipe({
  name: 'branchFormatter'
})
export class BranchFormatterPipe implements PipeTransform {

  transform(branch: Branch, args?: any): any {
    return branch.branchName? branch.branchName:branch.ifsc;
  }

}
