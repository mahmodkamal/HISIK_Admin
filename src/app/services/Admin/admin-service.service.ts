import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';

const END_POINT = 'http://mostafaaziema.pythonanywhere.com/api/Admin/';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  constructor(private http : HttpServiceService) { }
  getAdmins()
  {
    return this.http.get(END_POINT);
  }
  getAdminRole(role)
  {
    return this.http.get(END_POINT+role);
  }
}
