import { Component, OnInit } from '@angular/core';
import { ReportsServiceService } from '../../services/Reports/reports-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
reports ;
  constructor(private http :ReportsServiceService) { }

  ngOnInit() {
    this.http.getReports().subscribe(data=>{
      this.reports = data;
      console.log(this.reports);
      
    })
    
  }

}
