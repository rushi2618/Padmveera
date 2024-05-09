import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-report',
  templateUrl: './employee-report.component.html',
  styleUrls: ['./employee-report.component.css']
})
export class EmployeeReportComponent {

  displayedColumns: string[] = ['Sr. No.','Employee Name','Designation','Date of Joining','Salary','Action'];
  dataSource = new MatTableDataSource<employeenamereportList>;
  employeenamereportlist:employeenamereportList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  employeenamereportform = new FormGroup({
    id : new FormControl(0),
    e_name:new FormControl(''),
    designation:new FormControl('')

  })
  constructor(public rest: RestService) {

  }

  
}

export interface employeenamereportList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
