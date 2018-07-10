import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }
  @Output() getName = new EventEmitter<string>();
  @Input() name: string;
  ngOnInit() {
  }
  nameChange(name) {
    this.getName.emit(name);
  }
}
