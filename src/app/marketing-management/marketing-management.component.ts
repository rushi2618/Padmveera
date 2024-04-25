import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-marketing-management',
  templateUrl: './marketing-management.component.html',
  styleUrls: ['./marketing-management.component.css']
})
export class MarketingManagementComponent {

  displayedColumns: string[] = ['Sr No.', 'Site Name', 'Date','Description','Assigned Company','Name','Rate','Quantity','Total','Action'];
  dataSource = new MatTableDataSource<marketingManagement>;
  marketinglist:marketingManagement [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  marketingmanagement= new FormGroup({
    id : new FormControl(0),
    type : new FormControl(''),
  })
 

  marketingmanagementmodalform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    date : new FormControl(''),
    type : new FormControl(''),
    assigned : new FormControl(''),
    desc : new FormControl(''),
    page : new FormControl(''),
    place : new FormControl(''),
    rate : new FormControl(''),
    name : new FormControl(''),
    quan : new FormControl(''),
    total : new FormControl(''),
    narration : new FormControl(''),
  })
  
  constructor(public rest: RestService) {
  }

  submit(){
 
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface marketingManagement {
  id: number;
  plotno: number;
  areasqm: number;
  areasqft: number;
  govtrate:number;
  companyrate:number;
}
