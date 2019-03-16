import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'messag',
  templateUrl: './messag.component.html',
  styleUrls: ['./messag.component.scss']
})
export class MessagComponent implements OnInit {

  constructor() { }
  @Input() desciption ;
  @Input() time ;
  @Input() image;
  ngOnInit() {
  }

}
