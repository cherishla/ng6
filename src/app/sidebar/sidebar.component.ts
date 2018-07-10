import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Output() getTitle = new EventEmitter();
  ngOnInit() {
  }
  gotoPage(title) {
    this.getTitle.emit(title);
  }
}
