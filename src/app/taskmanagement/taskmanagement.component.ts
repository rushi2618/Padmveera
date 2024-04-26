import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-taskmanagement',
  templateUrl: './taskmanagement.component.html',
  styleUrls: ['./taskmanagement.component.css']
})
export class TaskmanagementComponent {

  displayedColumns: string[] = ['Sr No.', 'Task Name', 'site Name', 'Assigned To','Priority','Start Date','Due Date','Status','Description','Action'];
  dataSource = new MatTableDataSource<taskManagement>;
  tasklist:taskManagement [] = [];
  employeeList:any [] = [];
  siteList:any [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('myButton') myButton!: ElementRef;

  taskmanagement= new FormGroup({
    datesort : new FormControl(''),
    AssignedTo : new FormControl(0),
    Status : new FormControl('')
  })
 

  taskmanagementmodalform = new FormGroup({
    id : new FormControl(0),
    task_name : new FormControl(''),
    sitename : new FormControl(0),
    assigned_to : new FormControl(0),
    priority : new FormControl(''),
    start_date : new FormControl(''),
    due_date : new FormControl(''),
    status : new FormControl(''),
    remark : new FormControl('')
  })
  
  constructor(public rest: RestService) {
  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.taskmanagementmodalform.reset();
    this.getData();
    this.getEmployeeData();
    this.getSiteList();
  }

  getEmployeeData(){
    let type = 'list_user_master/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.employeeList = data.lists;
    });
  }

  getSiteList(){
    let type = 'SiteManagement_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList = data.lists;
    });
  }

  getData(){
    let type = 'get_list_task_management/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.tasklist = data.lists;
      this.dataSource = new MatTableDataSource(this.tasklist);
      this.dataSource.paginator = this.paginator;
    });
  }

  sortData(element:any){
    let obj = element;
    let type = 'sort_taskmanagement/'
    let Dataforsort = obj.datesort + '/' + obj.AssignedTo + '/' + obj.Status;
    this.rest.getApi(type,Dataforsort).subscribe((data:any)=>{
      this.tasklist = data.lists;
      this.dataSource = new MatTableDataSource(this.tasklist);
      this.dataSource.paginator = this.paginator;
    })
  }

  submit(){
    let ID = this.taskmanagementmodalform.controls.id.value;
    let obj = this.taskmanagementmodalform.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_taskmanagement';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_task/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
      });
    }
  }

  editData(element:any){
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to Edit Record ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Edit it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // alert(JSON.stringify(element));
        this.myButton.nativeElement.click();
        this.taskmanagementmodalform.patchValue({
          id : element.id,
          task_name : element.task_name,
          sitename : element.sitename,
          assigned_to : element.assigned_to,
          priority : element.priority,
          start_date : element.start_date,
          due_date : element.due_date,
          status : element.status,
          remark : element.remark
        });
      }
    });
  }

  deleteData(element:any){
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this row?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        let type = 'delete_task/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }

  reset(){
    this.taskmanagementmodalform.reset();
  }
}

export interface taskManagement {
  id: number;
  task_name : string;
  sitename : number;
  assigned_to : number;
  priority : string;
  start_date : string;
  due_date : string;
  status : string;
  remark : string;
}
