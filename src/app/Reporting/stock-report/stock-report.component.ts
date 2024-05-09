import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-report',
  templateUrl: './stock-report.component.html',
  styleUrls: ['./stock-report.component.css']
})
export class StockReportComponent {

  displayedColumns: string[] = ['Sr. No.','Site Name','Material','Ordered','Consumed','Remaining','Action'];
  dataSource = new MatTableDataSource<stockreportList>;
  stockreportlist:stockreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stockreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
    material:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface stockreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
