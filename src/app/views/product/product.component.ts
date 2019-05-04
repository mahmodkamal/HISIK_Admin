import { NotficationService } from './../../services/notfication/notfication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private notSer:NotficationService) { }

  Notfication;
  ngOnInit() {
  
    const userId = 'user001';
    this.notSer.requestPermission(userId)
    this.notSer.receiveMessage()
    this.Notfication = this.notSer.currentMessage
  
  }

}
