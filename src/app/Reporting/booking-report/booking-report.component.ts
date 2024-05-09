import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking-report',
  templateUrl: './booking-report.component.html',
  styleUrls: ['./booking-report.component.css']
})
export class BookingReportComponent {

  displayedColumns: string[] = ['Customer ID','Name','Address','Mobile No','Reference','Booking Remark','Site Name','Plot No','Sq.ft.','Sq.mt.','Action'];
  dataSource = new MatTableDataSource<bookingreportList>;
  bookingreportlist:bookingreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  bookingreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface bookingreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
