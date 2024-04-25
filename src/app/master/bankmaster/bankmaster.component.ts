import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bankmaster',
  templateUrl: './bankmaster.component.html',
  styleUrls: ['./bankmaster.component.css']
})
export class BankmasterComponent {
  displayedColumns: string[] = ['Sr.No', 'Bank Name','Branch Name','Account No','IFSC Code','Opening Balance', 'Action'];
  dataSource = new MatTableDataSource<bankmasterList>;
  bankmasterlist:bankmasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  bankmasterform = new FormGroup({
    id : new FormControl(0),
    bank_name: new FormControl(''),
    bank_branch_name:new FormControl(''),
    bank_account_no : new FormControl(''),
    ifsc_code:new FormControl(''),
    opening_balance:new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.bankmasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'bank_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.bankmasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.bankmasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.bankmasterform.controls.id.value;
    let obj = this.bankmasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_bank';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_bank/';
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
        this.bankmasterform.patchValue({
          id : element.id,
          bank_name: element.bank_name,
          bank_branch_name:element.bank_branch_name,
          bank_account_no : element.bank_account_no,
          ifsc_code:element.ifsc_code,
          opening_balance:element.opening_balance
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
        let type = 'delete_bank/'
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

export interface bankmasterList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
