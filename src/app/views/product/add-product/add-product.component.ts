import { PushService } from './../../../services/notfication/pushnot/push.service';

import { ProductService } from './../../../services/Product/product.service';
import { PrandService } from './../../../services/Product/prand/prand.service';
import { CategoryService } from './../../../services/Product/category/category.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/storage';
import { NgForm } from '@angular/forms';
import { NotficationService } from '../../../services/notfication/notfication.service';
import { Notfication } from '../../../calsses/notfication';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  Categories;
  category;
  Prands;
  prand;
  Products;
  imgUrl;
  image :File=null;
  Notfication;
  NOt;
  Token;
  Notfcations;
  
  constructor(private Catser:CategoryService,
              private prandSer:PrandService,
              private prodSer:ProductService,
              private NotSer :NotficationService,
              private PushNot :PushService) { }

  ngOnInit() {
    this.Catser.getCategory().subscribe(cat=>
      {
        this.Categories = cat
        console.log(this.Categories);
      })
    this.prandSer.getPrand().subscribe(prand=>{
      this.Prands = prand;
      console.log(this.Prands);
    })  
    this.prodSer.getProducts().subscribe(prod=>{
      this.Products = prod;
      console.log(this.Products);
    })

    const userId = 'user001';
    this.Token = this.NotSer.requestPermission(userId)
    this.NotSer.receiveMessage()
    this.Notfication = this.NotSer.currentMessage
    console.log(this.Notfication);
    this.PushNot.getNotfications().subscribe(notfications=>{
      this.Notfcations = notfications;
      console.log(this.Notfcations);
    })
  }
  PrandCatogery(value)
  {
    this.prand = value;
    console.log(value);
  }
  changeCatogery(value)
  {
    this.category = value;
    console.log(value);
  }
  imageFileChange($event)
  {
    this.image = <File>$event.target.files[0];
    console.log(this.image);
    const storageRef =firebase.storage().ref();
    storageRef.child("products").put($event.target.files[0]).then(snap=>{
      console.log(snap);
    });
    storageRef.child("products").getDownloadURL().then(data=>{
      this.imgUrl = data;
      console.log(data);
    }) 
}

addProduct(from:NgForm)
{
  let LastProd ;
  console.log(from.value);
  this.prodSer.addProduct({
    "name":from.value.name,
    "Description":from.value.description,
    "brand":this.prand,
    "Category":this.category,
    "ImageURL":this.imgUrl,
  }).subscribe(data=>{
    this.Products.push(data);
     LastProd= data;
     let Body = {
      "notification": {
        "title": "New notfication From Admin ", 
        "body": LastProd.name,

       },
       
       "to" : "cK1gZi-Hkgo:APA91bHOiUevUN5DgI7tQVVClDE5XokVTlwdsGO4SclT4sj6j5Q5NrQ0g-XsxjIEF6D-2J_l2T7zPowrq7xF-xlLPaBSQLfbFk8TY4jqobLtUGEpiA2HX8o0ptOtZq3GifOXktWTC02b"
       
      }
      let NotficationBody = {
        "status":true,
        "Type":1,
        "user":1,
        "product":LastProd.id,
        "review":1,
        "title":'Admin Notfication , New Product Added '+ LastProd.name,
      }

     this.PushNot.pushNotfiation(Body).subscribe(data=>{
      console.log(data,'plaaaaaaaah');
    });
    this.PushNot.PushGeneralNotfiation('new Product Added',LastProd.name).subscribe((data)=>{
      console.log(data);
    })
    this.PushNot.addNotfication({
        "status":true,
        "Type":1,
        "user":1,
        "product":LastProd.id,
        "review":"",
        "title":'Admin Notfication , New Product Added '+ LastProd.name,
      }).subscribe(lastnot=>{
      this.NOt = lastnot;
      console.log(this.NOt);
    })
    console.log(data);
  },error=>{
    console.log(error);
  })
  // let NotBody:Notfication = new Notfication();
  // NotBody.User = 1;
  // NotBody.product =  LastProd.id;
  // NotBody.status = true;
  // NotBody.title = 'New Product Added with name '+ LastProd.name;
  // this.PushNot.addNotfication(NotBody).subscribe(notfication=>{
  //     this.NOt = notfication;
  //     console.log(this.NOt);
  // }); 
  
  }

}
    
  
