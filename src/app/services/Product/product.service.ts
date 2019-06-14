import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';

const END_POINT = 'http://mostafaaziema.pythonanywhere.com/api/product/';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpServiceService) { }

  getProducts()
  {
    return this.http.get(END_POINT);
  }
  addProduct(body)
  {
    return this.http.post(END_POINT,body)
  }
}
