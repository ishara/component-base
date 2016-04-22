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
  
  <cg-drop-down [options]="items" (selected)="selected($event)">
  
</cg-drop-down>
  `
})
export class CGDropdownDemo {
  private value:any = {};
  private _disabledV:string = '0';
  private disabled:boolean = false;
  private items:Array<NameCodeItem> = [
    new NameCodeItem(1,"code1","name1"),
    new NameCodeItem(2,"code2","name2"),
    new NameCodeItem(3,"code3"),
    new NameCodeItem(4)
  ];

  private get disabledV():string {
    return this._disabledV;
  }

  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  private selected(value:any) {
    console.log('Selected value is: ', value);
  }

  private removed(value:any) {
    console.log('Removed value is: ', value);
  }

  private typed(value:any) {
    console.log('New search input: ', value);
  }

  private refreshValue(value:any) {
    this.value = value;
  }
}
