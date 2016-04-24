import {Input, Component} from 'angular2/core';
/**
 * Created by ishara on 22/04/2016.
 */

@Component({
  selector: 'cg-tab',
  template: `
  <div class="ui bottom attached tab segment"
       [class.active]="active">

    <ng-content></ng-content>

  </div>
  `
})
export class CGTab {
  @Input('title') title: string;
  active: boolean = false;
  name: string;
}

