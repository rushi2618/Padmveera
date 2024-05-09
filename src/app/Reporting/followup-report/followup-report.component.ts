import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-followup-report',
  templateUrl: './followup-report.component.html',
  styleUrls: ['./followup-report.component.css']
})
export class FollowupReportComponent {

  displayedColumns: string[] = ['Sr. No.','Site Name','Customer Name','Plot No','Area Sqft','Mobile No','Action'];
  dataSource = new MatTableDataSource<followupreportList>;
  followupreportlist:followupreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  followupreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
    material:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface followupreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
