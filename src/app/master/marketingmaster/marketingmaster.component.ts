import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marketingmaster',
  templateUrl: './marketingmaster.component.html',
  styleUrls: ['./marketingmaster.component.css']
})
export class MarketingmasterComponent {

  displayedColumns: string[] = ['Sr No.', 'Marketing Type','Description', 'Action'];
  dataSource = new MatTableDataSource<marketingtypeList>;
  marketingtypelist:marketingtypeList [] = [];
  marketingmasterlist:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  marketingtypeform = new FormGroup({
    id : new FormControl(0),
    marketing_type : new FormControl(''),
    sub_type:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.marketingtypeform.reset();
    this.getData();
    this.getTypeData();
  }

  getTypeData(){
    let type = 'MarketingType_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.marketingmasterlist = data.lists;
    });
  }

  getData(){
    let type = 'marketing_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.marketingmasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.marketingmasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.marketingtypeform.controls.id.value;
    let obj = this.marketingtypeform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_marketing';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_marketing/';
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
        this.marketingtypeform.patchValue({
          id : element.id,
          marketing_type: element.marketing_type,
          sub_type: element.sub_type,
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
        let type = 'delete_marketing/'
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

export interface marketingtypeList {
  id: number;
  marketing_type: number;
  sub_type: string;
}




