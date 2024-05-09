import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-report',
  templateUrl: './account-report.component.html',
  styleUrls: ['./account-report.component.css']
})
export class AccountReportComponent {

  displayedColumns: string[] = ['Sr No.','Date','Site Name','Transaction Details','Bank Name','Branch Name', 'Account No','Credit/Debit','Balance','Action'];
  dataSource = new MatTableDataSource<AccountreportList>;
  Accountreportlist:AccountreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  Accountreportform = new FormGroup({
    id : new FormControl(0),
    payment_mode: new FormControl(''),
    sitename:new FormControl(''),
    sdate : new FormControl(''),
    edate : new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  
}

export interface AccountreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
