import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';


const END_POINT = 'http://mostafaaziema.pythonanywhere.com/api/message/';
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
