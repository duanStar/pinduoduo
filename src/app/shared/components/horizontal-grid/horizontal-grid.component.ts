import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.less']
})
export class HorizontalGridComponent implements OnInit {
  username = ''
  handleInput(e:any){
    this.username = (e.target as HTMLInputElement).value
  }

  constructor() { }

  ngOnInit() {
  }

}
