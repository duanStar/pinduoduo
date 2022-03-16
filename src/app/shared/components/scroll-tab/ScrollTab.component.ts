import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link: string;
}

@Component({
  selector: 'app-ScrollTab',
  templateUrl: './ScrollTab.component.html',
  styleUrls: ['./ScrollTab.component.less']
})
export class ScrollTabComponent implements OnInit {

  @Input()
  menus: TopMenu[] = [];
  @Output()
  tabSelected = new EventEmitter();
  @Input()
  backgroundColor = '#fff'
  @Input()
  titleActiveColor = 'red'
  @Input()
  titleColor = '#000'
  @Input()
  indicatorColor = 'red'
  selectedIndex = 0;
  handleSelection(index: number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }
  constructor() {

  }
  ngOnInit() {

  }
}
