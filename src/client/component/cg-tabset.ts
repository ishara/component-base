import {AfterContentInit, QueryList, Component, Query} from "angular2/core";
import {CGTab} from "./cg-tab";
/**
 * Created by ishara on 22/04/2016.
 */
@Component({
  selector: 'cg-tabset',
  template: `
  <div class="ui top attached tabular menu">
    <a *ngFor="#tab of tabs"
       class="item"
       [class.active]="tab.active"
       (click)="setActive(tab)">

      {{ tab.title }}

    </a>
  </div>
  <ng-content></ng-content>
  `
})
export class CGTabset implements AfterContentInit {
  tabs: QueryList<CGTab>;

  constructor(@Query(CGTab) tabs:QueryList<CGTab>) {
    this.tabs = tabs;
  }

  ngAfterContentInit() {
    this.tabs.toArray()[0].active = true;
  }

  setActive(tab: CGTab) {
    this.tabs.toArray().forEach((t) => t.active = false);
    tab.active = true;
  }
}
