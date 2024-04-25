import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-visited-customer',
  templateUrl: './visited-customer.component.html',
  styleUrls: ['./visited-customer.component.css']
})
export class VisitedCustomerComponent {

  displayedColumns: string[] = ['Sr No.', 'Site Name', 'Customer Name','Plot No','Area','Mobile No','Customer Response','Visited Date','Reminder Date','Lead Source','Status','Action'];
  dataSource = new MatTableDataSource<customermanagementList>;
  customermanagementlist:customermanagementList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  customermanagementform = new FormGroup({
    id : new FormControl(0),
    sdate : new FormControl(''),
    edate : new FormControl(''),
    site:new FormControl(''),
    status:new FormControl('')
  });

  customermanagementmodalform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    plot : new FormControl(''),
    areas:new FormControl(''),
    aream:new FormControl(''),
    name:new FormControl(''),
    email:new FormControl(''),
    add:new FormControl(''),
    mobile:new FormControl(''),
    leads:new FormControl(''),
    leadb:new FormControl(''),
    contact:new FormControl(''),
    deal:new FormControl(''),
    vdate:new FormControl(''),
    rdate:new FormControl('')
  });
  constructor(public rest: RestService) {

  }

  submit(){
    
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface customermanagementList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
