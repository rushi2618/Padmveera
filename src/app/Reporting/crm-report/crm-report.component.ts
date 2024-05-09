import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crm-report',
  templateUrl: './crm-report.component.html',
  styleUrls: ['./crm-report.component.css']
})
export class CrmReportComponent {

  displayedColumns: string[] = ['Sr. No.','Site Name','Client Name','Date','Receipt No','Mode Of Pay','Total Amount','MoAmount Received','Remaining Balance','Action'];
  dataSource = new MatTableDataSource<CRMreportList>;
  CRMreportlist:CRMreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  CRMreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
    customer_name:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface CRMreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
