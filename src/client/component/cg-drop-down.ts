/**
 * Created by ishara on 22/04/2016.
 */

import {Component, Input, EventEmitter, Output, OnInit} from 'angular2/core';
import {NameCodeItem} from "./name-code-item";
@Component({
  selector: 'cg-drop-down',
  template: `
    <select class="wi-cg-drop-down" [ngModel]="selectedItem.code" (ngModelChange)="onChange($event)" [disabled]="_disabled">
      <option *ngFor="#item of items" [value]="item.code">
      {{ (item.name==null ? item.code : item.name) }}</option>
    </select>
    <br>comp: {{selectedItem | json}}
`
})

export class CGDropDown implements OnInit {
  _disabled:boolean = false;
  @Input()
  selectedItem:NameCodeItem;
  @Input()
  items:Array<NameCodeItem>;
  @Input()
  nullItem:NameCodeItem;

  @Input() set disabled(value:boolean) {
    this._disabled = value;
  }

  @Output()
  selectedItemChange:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit():void {
    if (this.nullItem != null) {
      this.items.unshift(this.nullItem)
    }
  }

  private onChange(newValue:string) {
    console.log('nv', newValue);
    this.selectedItem = this.items.find(item => item.code == newValue);
    console.log('si', this.selectedItem);
    this.selectedItemChange.emit(this.selectedItem);
  }
}



