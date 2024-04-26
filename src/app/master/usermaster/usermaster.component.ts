import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usermaster',
  templateUrl: './usermaster.component.html',
  styleUrls: ['./usermaster.component.css']
})
export class UsermasterComponent {
  displayedColumns: string[] = ['Sr No.', 'User Name', 'Email Id','Role','Mobile No', 'Action'];
  dataSource = new MatTableDataSource<usermasterList>;
  usermasterlist:usermasterList [] = [];
  employeeList:any[]=[];
  Employee:any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  usermasterform = new FormGroup({
    id : new FormControl(0),
    Empid : new FormControl(0),
    name : new FormControl(''),
    email : new FormControl(''),
    mobile_no:new FormControl(''),
    role : new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.usermasterform.reset();
    this.getData();
    this.getEmployeeData();
  }

  getEmployeeData(){
    let type = 'employee_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.employeeList = data.lists;
    });
  }

  getSingleEmployee(event:any){
    let empid = this.usermasterform.controls.Empid.value;
    let type = 'single_employee_data/';
    this.rest.getApi(type,empid).subscribe((data:any)=>{
      this.Employee = data.single_data;
      this.usermasterform.controls.email.setValue(this.Employee.email_id);
      this.usermasterform.controls.mobile_no.setValue(this.Employee.contact_no);
    });
  }

  getData(){
    let type = 'list_user_master/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.usermasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.usermasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.usermasterform.controls.id.value;
    let empid = this.usermasterform.controls.Empid.value;
    let obj = this.usermasterform.value; 
    this.employeeList.forEach((item:any) => {
      if(item.id == empid){
        obj.name = item.employee_name;
      }
    });
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_user_master';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_user_master/';
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
        this.usermasterform.patchValue({
          id : element.id,
          Empid : element.Empid,
          email :  element.email,
          mobile_no: element.mobile_no,
          role : element.role
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
        let type = 'delete_user_master/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }
}

export interface usermasterList {
  id: number;
  Empid: number;
  name: string;
  email: string;
  role: string;
  mobile_no: string;
}
