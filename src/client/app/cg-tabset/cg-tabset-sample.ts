import {CGTabset} from "../../component/cg-tabset";
import {CGTab} from "../../component/cg-tab";
import {Component} from "angular2/core";
/**
 * Created by ishara on 22/04/2016.
 */

@Component({
  selector: 'cg-tabset-sample',
  directives: [CGTabset, CGTab],
  template: `
  <tabset>
    <tab title="First tab">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Quibusdam magni quia ut harum facilis, ullam deleniti porro
      dignissimos quasi at molestiae sapiente natus, neque voluptatum
      ad consequuntur cupiditate nemo sunt.
    </tab>
    <tab *ngFor="#tab of tabs" [title]="tab.title">
      {{ tab.content }}
    </tab>
  </tabset>
  `
})
export class CGTabSetSample {
  tabs: any;

  constructor() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }
}
