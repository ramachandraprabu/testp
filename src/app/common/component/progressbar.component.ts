import {Component, Input, NgModule} from '@angular/core';

import {Progress} from '../directive/progress.directive';
import {Bar} from './bar.component';
@NgModule({
    declarations: [ Progress, Bar ]
})

@Component({
    selector: 'progressbar, [progressbar]',
    template: `
    <div progress [animate]="animate" [max]="max">
      <bar [type]="type" [value]="value">
          <ng-content></ng-content>
      </bar>
    </div>
  `
})
export class Progressbar {
    @Input() public animate:boolean;
    @Input() public max:number;
    @Input() public type:string;
    @Input() public value:number;
}
