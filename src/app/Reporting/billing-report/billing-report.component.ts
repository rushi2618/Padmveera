import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billing-report',
  templateUrl: './billing-report.component.html',
  styleUrls: ['./billing-report.component.css']
})
export class BillingReportComponent {
  displayedColumns: string[] = ['Sr No.','Site','Date','Received By','Received To','Purpose', 'Main Ledger','Sub Ledger', 'Qty','Unit','Rate','Bill','Paid','Income','Balance','MOP','Action'];
  dataSource = new MatTableDataSource<billingreportList>;
  billingreportlist:billingreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  billingreportform = new FormGroup({
    id : new FormControl(0),
    date : new FormControl(''),
    received_by : new FormControl(''),
    received_to:new FormControl(''),
    sitename:new FormControl(''),
    paid:new FormControl(''),
    paid_for_what:new FormControl(''),
    main_ledger:new FormControl(''),
    under_ledger:new FormControl(''),


  })
  constructor(public rest: RestService) {

  }

  
}

export interface billingreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}


