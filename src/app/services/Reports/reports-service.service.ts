import { environment } from './../../../environments/environment';
import { HttpServiceService } from './../Http/http-service.service';
import { Injectable } from '@angular/core';

const END_POINT = environment.apiUrl+'/api/report/';
@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  constructor(private http:HttpServiceService) { }

  getReports()
  {
    return this.http.get(END_POINT);
  }
}
