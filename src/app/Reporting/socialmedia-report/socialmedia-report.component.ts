import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-socialmedia-report',
  templateUrl: './socialmedia-report.component.html',
  styleUrls: ['./socialmedia-report.component.css']
})
export class SocialmediaReportComponent {
  displayedColumns: string[] = ['Sr. No.','Site Name','Marketing Type','Cost','Action'];
  dataSource = new MatTableDataSource< socialmediareportList>;
   socialmediareportlist: socialmediareportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

   socialmediareportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  
}

export interface  socialmediareportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
