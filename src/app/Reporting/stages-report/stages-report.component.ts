import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stages-report',
  templateUrl: './stages-report.component.html',
  styleUrls: ['./stages-report.component.css']
})
export class StagesReportComponent {

  displayedColumns: string[] = ['Sr. No.','Stage Name','Estimate Total','Actual Total','Action'];
  dataSource = new MatTableDataSource< StagesreportList>;
   Stagesreportlist: StagesreportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

   Stagesreportform = new FormGroup({
    id : new FormControl(0),
    sitename:new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  
}

export interface  StagesreportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;

}
