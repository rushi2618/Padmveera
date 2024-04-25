import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent {

  displayedColumns: string[] = ['Sr No.', 'Task Name', 'Assigned To','Priority','Start Date','Due Date','Status','Description','Action'];
  dataSource = new MatTableDataSource<taskManagement>;
  tasklist:taskManagement [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  taskmanagement= new FormGroup({
    id : new FormControl(0),
    date : new FormControl(''),
    assigned : new FormControl(''),
    status : new FormControl('')
  })
 

  taskmanagementmodalform = new FormGroup({
    id : new FormControl(0),
    task : new FormControl(''),
    site : new FormControl(''),
    assigned : new FormControl(''),
    priority : new FormControl(''),
    sdate : new FormControl(''),
    ddate : new FormControl(''),
    status : new FormControl(''),
    desc : new FormControl('')
  })
  
  constructor(public rest: RestService) {
  }

  submit(){
 
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface taskManagement {
  id: number;
  plotno: number;
  areasqm: number;
  areasqft: number;
  govtrate:number;
  companyrate:number;
}
