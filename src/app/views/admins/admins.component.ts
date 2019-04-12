import { AdminServiceService } from './../../services/Admin/admin-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {
  admins  ;
  constructor(private adminService : AdminServiceService) {

    
   }

  ngOnInit() {
    this.adminService.getAdmins().subscribe(data=>{
      this.admins = data;
      console.log(this.admins);
    });
      
  }

}
