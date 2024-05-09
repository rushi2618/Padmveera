import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-advertisement-report',
  templateUrl: './advertisement-report.component.html',
  styleUrls: ['./advertisement-report.component.css']
})
export class AdvertisementReportComponent {

  displayedColumns: string[] = ['Sr. No.','Date','Site Name','Advertisement Type','Company Name','Cost','Action'];
  dataSource = new MatTableDataSource< advertisementreportList>;
   advertisementreportlist: advertisementreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

   advertisementreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
    material:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface  advertisementreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
