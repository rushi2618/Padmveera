import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendormaster',
  templateUrl: './vendormaster.component.html',
  styleUrls: ['./vendormaster.component.css']
})
export class VendormasterComponent {
  displayedColumns: string[] = ['ID', 'Vendor Name','Vendor Phone No.','Address', 'Action'];
  dataSource = new MatTableDataSource<vendormasterList>;
  vendormasterlist:vendormasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  vendormasterform = new FormGroup({
    id : new FormControl(0),
    vendor_name : new FormControl(''),
    mobile_no:new FormControl(''),
    vendor_address : new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.vendormasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'vendor_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.vendormasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.vendormasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.vendormasterform.controls.id.value;
    let obj = this.vendormasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_vendor';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_vendor/';
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
        this.vendormasterform.patchValue({
          id : element.id,
          vendor_name : element.vendor_name,
          mobile_no:  element.mobile_no,
          vendor_address : element.vendor_address
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
        let type = 'delete_vendor/'
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

export interface vendormasterList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
