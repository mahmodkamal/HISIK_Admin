import { environment } from './../../../../environments/environment';
import { Notfication } from './../../../calsses/notfication';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const pushEndPoint = 'https://fcm.googleapis.com/fcm/send';
const NotEndPoint = environment.apiUrl+'/api/userNoitifaction/';
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
       
       "to" : "deKiJQsEIZ8:APA91bEro-galCpIIWCANwbcZHtpoi5XJ12rsa8838MCYkmO9wa2-SA11XZjLmoicJ5cY_m-vA-1H6sPdHvzKFw0jjfAj3qW69ParAgLVtRVfWXcROSz-UbTRdxraDPKIDshuVxmng7r"
       
      }
   
    return this.http.post(pushEndPoint,body,PushHeaders);
  }
  PushGeneralNotfiation(title:string,Body:string)
    {
        let body = {
            "notification":{
              "title":title,
              "body":Body,
              "sound":"default",
              "click_action":"FCM_PLUGIN_ACTIVITY",
              "icon":"fcm_push_icon"
            },
              "to":"/topics/all",
              "priority":"high",
              "restricted_package_name":""
          }
          let options = new HttpHeaders().set('Content-Type','application/json');
          return this.http.post("https://fcm.googleapis.com/fcm/send",body,{
            headers: options.set('Authorization', 'key=AAAAfpOaUnk:APA91bF4BHLlm5qFRfYcnyr-v4ZyJznr7moEs_sacdBnMHp0PNXSymtBhNpGMkj7kPv2ird68OsxKW1rss4xNEuIaQVVfL3uU5FrlA0kFTAbHbctLBHD8qxgGCmEboLr66J10mZfsk_I'),
          });
    }
    pushNoticationForUser(title:string,Body:string,token)
    {
        let body = {
            "notification":{
              "title":title,
              "body":Body,
              "sound":"default",
              "click_action":"FCM_PLUGIN_ACTIVITY",
              "icon":"fcm_push_icon"
            },
              "to":token,
              "priority":"high",
              "restricted_package_name":""
          }
          let options = new HttpHeaders().set('Content-Type','application/json');
           return this.http.post("https://fcm.googleapis.com/fcm/send",body,{
            headers: options.set('Authorization', 'key=AAAAfpOaUnk:APA91bF4BHLlm5qFRfYcnyr-v4ZyJznr7moEs_sacdBnMHp0PNXSymtBhNpGMkj7kPv2ird68OsxKW1rss4xNEuIaQVVfL3uU5FrlA0kFTAbHbctLBHD8qxgGCmEboLr66J10mZfsk_I'),
          });
    }



}
