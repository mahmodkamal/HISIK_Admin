import { PrandService } from './../../../services/Product/prand/prand.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-prand',
  templateUrl: './add-prand.component.html',
  styleUrls: ['./add-prand.component.scss']
})
export class AddPrandComponent implements OnInit {
prands;
error;
  constructor(private prService:PrandService) { 
    this.getPrands();
  }

  ngOnInit() {
    this.getPrands();

  }
addPrand(Form :NgForm){
  this.prService.AddPrand({"Name":Form.value.Prand}).subscribe(data=>{
      console.log(data);
      this.prands.push(data);
  },error=>{
    this.error = error;
  })
  console.log(Form.value);
}
getPrands()
{
  this.prService.getPrand().subscribe(data=>{
    this.prands = data;
    console.log(this.prands);
  })

}

}
