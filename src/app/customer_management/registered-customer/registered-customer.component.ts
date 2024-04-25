import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registered-customer',
  templateUrl: './registered-customer.component.html',
  styleUrls: ['./registered-customer.component.css']
})
export class RegisteredCustomerComponent {

  displayedColumns: string[] = ['Sr No.', 'Site Name','Plot No','Customer Name','Mobile No','Address','Action'];
  dataSource = new MatTableDataSource<registercustomerList>;
  registercustomerlist:registercustomerList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  registercustomerform = new FormGroup({
    id : new FormControl(0),
    sitenm : new FormControl(''),
    registerCustomer: new FormControl('')
  });
  constructor(public rest: RestService) {

  }

  submit(){
    
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface registercustomerList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
