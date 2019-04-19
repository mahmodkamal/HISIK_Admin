
import { ProductService } from './../../../services/Product/product.service';
import { PrandService } from './../../../services/Product/prand/prand.service';
import { CategoryService } from './../../../services/Product/category/category.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/storage';
import { NgForm } from '@angular/forms';

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
  
  constructor(private Catser:CategoryService,private prandSer:PrandService,private prodSer:ProductService) { }

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
  console.log(from.value);
  this.prodSer.addProduct({
    "name":from.value.name,
    "Description":from.value.description,
    "brand":this.prand,
    "Category":this.category,
    "ImageURL":this.imgUrl,
  }).subscribe(data=>{
    this.Products.push(data);
    console.log(data);
  },error=>{
    console.log(error);
  })
}
    
}  
