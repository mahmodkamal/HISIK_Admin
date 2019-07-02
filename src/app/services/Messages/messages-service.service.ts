import { environment } from './../../../environments/environment';
import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';


const END_POINT = environment.apiUrl+'/api/message/';
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
