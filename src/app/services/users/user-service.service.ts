import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';



const END_POINT = 'http://localhost:8000/api/user/';
@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  
  constructor(private http:HttpServiceService) { }
  
  
  getusers()
  {
    return this.http.get(END_POINT);
  }
}
