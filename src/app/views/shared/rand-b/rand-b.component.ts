import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rand-b',
  templateUrl: './rand-b.component.html',
  styleUrls: ['./rand-b.component.scss']
})
export class RandBComponent implements OnInit {

  constructor() { }
  @Input() Descritpion;
  @Input() image;
  @Input() category;

  @Output() ok : EventEmitter<any>;
  @Output() cancel: EventEmitter<any>;
  ngOnInit() {
  }

}
