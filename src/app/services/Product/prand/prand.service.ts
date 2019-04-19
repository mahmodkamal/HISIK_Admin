import { HttpServiceService } from './../../Http/http-service.service';
import { Injectable } from '@angular/core';
const END_POINT ='http://localhost:8000/api/brand/';
@Injectable({
  providedIn: 'root'
})
export class PrandService {

  constructor(private http:HttpServiceService) { }
  getPrand()
  {
    return this.http.get(END_POINT);
  }
  AddPrand(body)
  {
    return this.http.post(END_POINT,body);
  }
}
