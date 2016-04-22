/**
 * Created by ishara on 22/04/2016.
 */

import {Component, Input, EventEmitter, Output} from "angular2/core";
import {NameCodeItem} from "./name-code-item";
@Component({
  selector: 'cg-drop-down',
  template: `
<select #t (change)="optionChange(t.value)">
   <option *ngFor="#option of options"
       [value] ="option">
      {{ (option.name==null ? option.code : option.name) == null ? option.id : option.code }}
    </option>
   </select>
`
})

export class CGDropDown {
  @Input()
  public options:Array<NameCodeItem> = [];

  @Output()
  selected:EventEmitter<any> = new EventEmitter();


  optionChange(value:NameCodeItem){
    console.log(value.name);
  }
}

