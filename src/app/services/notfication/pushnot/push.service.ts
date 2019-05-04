import { Notfication } from './../../../calsses/notfication';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const pushEndPoint = 'https://fcm.googleapis.com/fcm/send';
const NotEndPoint = 'http://localhost:8000/api/Noitifaction/';
const PushHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'key=AAAAfpOaUnk:APA91bF4BHLlm5qFRfYcnyr-v4ZyJznr7moEs_sacdBnMHp0PNXSymtBhNpGMkj7kPv2ird68OsxKW1rss4xNEuIaQVVfL3uU5FrlA0kFTAbHbctLBHD8qxgGCmEboLr66J10mZfsk_I'
  })
};
const NotHeaders = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};
export const NotficationBody = {
  "status":'',
  "Type":'',
  "User":'',
  "product ":'',
  "title":''
}
@Injectable({
  providedIn: 'root'
})
export class PushService {

  constructor(private http:HttpClient) { }

  getNotfications(){
    return this.http.get(NotEndPoint,NotHeaders);
  }

  addNotfication(body)
  {
    return this.http.post(NotEndPoint,body,NotHeaders);
  }
  pushNotfiation(body)
  {
    let Body = {
      "notification": {
        "title": "Hello World", 
        "body": "This is from kahraba"
       },
       
       "to" : "cK1gZi-Hkgo:APA91bHOiUevUN5DgI7tQVVClDE5XokVTlwdsGO4SclT4sj6j5Q5NrQ0g-XsxjIEF6D-2J_l2T7zPowrq7xF-xlLPaBSQLfbFk8TY4jqobLtUGEpiA2HX8o0ptOtZq3GifOXktWTC02b"
       
      }
   
    return this.http.post(pushEndPoint,body,PushHeaders);
  }



}
