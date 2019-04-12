import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const Headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }),
  withCredentials: false,
};

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient) { }
  get(endpoint){
    return this.http.get(endpoint,Headers);
  }
  
  post(endpoint,body)
  {
    return this.http.post(endpoint,body,Headers);
  }
  delete(endpoint,params: any = {}, resource): Observable<any>
  {
    return this.http.delete(endpoint,resource);
  }

  
}
