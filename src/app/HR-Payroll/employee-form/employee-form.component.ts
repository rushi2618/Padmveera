import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {

  dataSource = new MatTableDataSource<employeeformList>;
  employeeformlist:employeeformList [] = [];
  editData:any[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  employeeformform = new FormGroup({
    id : new FormControl(0),
    employee_name: new FormControl(''),
    email_id:new FormControl(''),
    contact_no : new FormControl(''),
    emergency_no:new FormControl(''),
    designation: new FormControl(''),
    joining_date:new FormControl(''),
    dob : new FormControl(''),
    salary:new FormControl(''),
    gender:new FormControl(''),
    address:new FormControl(''),
    adhar_no : new FormControl(''),
    pan_no:new FormControl(''),
    bank_name:new FormControl(''),
    bank_branch:new FormControl(''),
    bank_acc_no : new FormControl(''),
    IFSC_code:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    if(this.rest.EditID > 0){
      let type = 'single_employee_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        //console.log(this.rest.EditID);
        this.editData[0] = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.employeeformform.reset();
  }


  updateFormData(){
    this.employeeformform.patchValue({
    id: this.editData[0].id,
    employee_name: this.editData[0].employee_name,
    email_id:this.editData[0].email_id,
    contact_no : this.editData[0].contact_no,
    emergency_no:this.editData[0].emergency_no,
    designation: this.editData[0].designation,
    joining_date:this.editData[0].joining_date,
    dob : this.editData[0].dob,
    salary:this.editData[0].salary,
    gender:this.editData[0].gender,
    address:this.editData[0].address,
    adhar_no : this.editData[0].adhar_no,
    pan_no:this.editData[0].pan_no,
    bank_name:this.editData[0].bank_name,
    bank_branch:this.editData[0].bank_branch,
    bank_acc_no : this.editData[0].bank_acc_no,
    IFSC_code:this.editData[0].IFSC_code
    });
  }

  submit(){
    let ID=this.employeeformform.controls.id.value;
    let obj=this.employeeformform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_employee';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else {
      let type1 = 'update_employee/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
      });
    }
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface employeeformList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
