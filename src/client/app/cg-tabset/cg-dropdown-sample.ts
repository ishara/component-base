import {Component} from "angular2/core";
import {CGDropDown} from "../../component/cg-drop-down";
import {NameCodeItem} from "../../component/name-code-item";
/**
 * Created by ishara on 22/04/2016.
 */

@Component({
  selector: 'cg-dropdown-sample',
  directives: [CGDropDown],
  template: `
<cg-drop-down [items]="selectItems" [(selectedItem)]="itemToSelect" [nullItem]="nullObject" [disabled]="false" ></cg-drop-down>
  `
})
export class CGDropdownDemo {
  private nullObject:NameCodeItem =new NameCodeItem("null","--Any--");
  private selectItems:Array<NameCodeItem> = [
    new NameCodeItem("code1","name1"),
    new NameCodeItem("code2","name2"),
    new NameCodeItem("code3"),
  ];
  itemToSelect = this.selectItems[1];

  constructor() {
    console.clear();
  }

}
