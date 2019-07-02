import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';



const END_POINT = environment.apiUrl+'/api/user/';
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
