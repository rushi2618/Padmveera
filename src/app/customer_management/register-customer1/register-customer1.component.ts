import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register-customer1',
  templateUrl: './register-customer1.component.html',
  styleUrls: ['./register-customer1.component.css']
})
export class RegisterCustomer1Component {

  displayedColumns: string[] = ['Sr.No', 'Bank Name','Branch Name','Account No','IFSC Code','Opening Balance', 'Action'];
  dataSource = new MatTableDataSource<registerCustomerList>;
  registerCustomerlist:registerCustomerList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  registerCustomerform = new FormGroup({
    id : new FormControl(0),
    site_name: new FormControl(''),
    register_customer:new FormControl(''),
    email_id : new FormControl(''),
    address:new FormControl(''),
    mobile_no:new FormControl(''),
    visited_date:new FormControl(''),
    lead_source:new FormControl(''),
    lead_by:new FormControl(''),
    plot_num:new FormControl(''),
    basic_rate:new FormControl(''),
    area_sqmt:new FormControl(''),
    area_sqft:new FormControl(''),
    discounted_rate:new FormControl(''),
    discount:new FormControl(''),
    total_plot_amount:new FormControl(''),
    register_date:new FormControl(''),
    register_by:new FormControl(''),
    reckoner_rate:new FormControl(''),
    gov_value:new FormControl(''),
    value_of_agreement:new FormControl(''),
    tax_value_in:new FormControl(''),
    stamp_duties:new FormControl(''),
    tax_values:new FormControl(''),
    reg_fees:new FormControl(''),
    gst:new FormControl(''),
    legal_charge:new FormControl(''),
    total_extra_charge:new FormControl(''),
    grand_total:new FormControl(''),
    amount_paid:new FormControl(''),
    remaining_amount:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  submit(){
    
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface registerCustomerList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
