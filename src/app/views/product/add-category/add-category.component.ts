import { CategoryService } from './../../../services/Product/category/category.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(private catService:CategoryService) { 
    this.categories = this.catService.getCategory();
  }
  error;
  categories;
  ngOnInit() {
    
  }
  addCategory(f :NgForm){
    this.catService.addCategory({"Name":f.value.category}).subscribe(result=>{
      console.log(result);
      this.categories.push(result);
    },error=>{
      this.error = error;
    });
  console.log(f.value.category);
  }

}
