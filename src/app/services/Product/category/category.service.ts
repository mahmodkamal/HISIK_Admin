import { HttpServiceService } from './../../Http/http-service.service';
import { Injectable } from '@angular/core';
const END_POINT ='http://mostafaaziema.pythonanywhere.com/api/category/';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpServiceService) { }
  getCategory()
  {
    return this.http.get(END_POINT);
  }
  addCategory(body)
  {
    return this.http.post(END_POINT,body);
  }
}
