import { MessagesServiceService } from './../../../services/Messages/messages-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
messages ;
  constructor(private messService :MessagesServiceService) { }

  ngOnInit() {
    this.messService.getMessages().subscribe(data=>{
      this.messages = data ;
      console.log(this.messages)
    })
  }

}
