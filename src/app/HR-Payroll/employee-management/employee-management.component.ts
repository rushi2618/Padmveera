import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent {

  displayedColumns: string[] = ['Sr No.', 'Employee Name', 'Designation','Joining Date','Salary', 'Action'];
  dataSource = new MatTableDataSource<employeedetailsList>;
  employeedetailslist:employeedetailsList [] = [];
  employeeList:any[]=[];
  employeeList1:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  employeedetailsform = new FormGroup({
    id : new FormControl(0),
    e_name : new FormControl('')
  })
  constructor(public rest: RestService, private route:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.getData();
    this.getEmployeeList();
  }


  submit(){
    
  }

  getData(){
    let type = 'employee_lists';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.employeedetailslist = data.lists;
      this.dataSource = new MatTableDataSource(this.employeedetailslist);
      this.dataSource.paginator = this.paginator;
    });
  }

  getEmployeeList(){
    let type="employee_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.employeeList=data.lists;
    });
  }

  employeelist(){
   this.route.navigateByUrl('homepage/HR-Payroll/employee-form');
  }


  id:any;
  editData(data: any) {
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
        this.id = data.id;
        this.rest.EditID = this.id;
        this.employeelist();
      }
    });
  }

  sortData(element:any){
    this.employeedetailslist=[];
    let obj = element;
    let DataSource=obj.e_name;
    let type = 'single_employee_data/';
    this.rest.getApi(type,DataSource).subscribe((data:any)=>{
      this.employeedetailslist.push(data.single_data);
      this.dataSource = new MatTableDataSource(this.employeedetailslist);
      this.dataSource.paginator = this.paginator;
      //this.dataSource.paginator = this.paginator;
    })
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
        let type = 'delete_employee/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }

  nextP(){
   this.route.navigateByUrl('homepage/HR-Payroll/employee-form');
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface employeedetailsList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
