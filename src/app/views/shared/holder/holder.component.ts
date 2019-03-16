import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'holder',
  templateUrl: './holder.component.html',
  styleUrls: ['./holder.component.scss']
})
export class HolderComponent implements OnInit {
  isAdmin = true;
  constructor() { }
  @Input() email ;
  @Input() UserName ;
  @Input() ip;
  @Input() image ;
  @Input() type ;
  @Input() EditButton:boolean = true;
  @Input() DeleteButton:boolean =true ;

  @Output() delete : EventEmitter<any>;
  @Output() block: EventEmitter<any>;
  @Output() edit: EventEmitter<any>;
  
  ngOnInit() {
  }

  Delete()
  {
      console.log('delete');
  }
  Block()
  {
      console.log('block');
  }
  Edit()
  {
      console.log('edit');
  }
  

}
