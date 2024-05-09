import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-office-report',
  templateUrl: './office-report.component.html',
  styleUrls: ['./office-report.component.css']
})
export class OfficeReportComponent {
  displayedColumns: string[] = ['Sr No.','Site','Date','Received By','Received To','Purpose','Income','Expense','Balance','MOP','Narration','Action'];
  dataSource = new MatTableDataSource<officereportList>;
  officereportlist:officereportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  officereportform = new FormGroup({
    id : new FormControl(0),
    date : new FormControl(''),
    received_by : new FormControl(''),
    received_to:new FormControl(''),
    sitename:new FormControl(''),
    paid_for_what:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface officereportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
