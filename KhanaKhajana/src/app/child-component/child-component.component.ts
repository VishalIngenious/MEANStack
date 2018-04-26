import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  inputs: ['count'],
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  //@Input() count: number;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  name: String= 'Vishal';
  constructor() { }
  sendBack() {
    this.onClick.emit(this.name);
  }

  ngOnInit() { }

}
