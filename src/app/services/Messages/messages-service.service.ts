import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';


const END_POINT = 'http://localhost:8000/api/message/';
@Injectable({
  providedIn: 'root'
})
export class MessagesServiceService {

  constructor(private http :HttpServiceService) { }
  getMessages()
  {
    return this.http.get(END_POINT);
  }
}
