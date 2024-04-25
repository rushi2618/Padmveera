import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marketingtypemaster',
  templateUrl: './marketingtypemaster.component.html',
  styleUrls: ['./marketingtypemaster.component.css']
})
export class MarketingtypemasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Marketing Type', 'Action'];
  dataSource = new MatTableDataSource<marketingmasterList>;
  marketingmasterlist:marketingmasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  marketingmasterform = new FormGroup({
    id : new FormControl(0),
    marketing_type: new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.marketingmasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'MarketingType_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.marketingmasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.marketingmasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.marketingmasterform.controls.id.value;
    let obj = this.marketingmasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_MarketingType';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_MarketingType/';
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
        this.marketingmasterform.patchValue({
          id : element.id,
          marketing_type: element.marketing_type,
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
        let type = 'delete_MarketingType/'
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

export interface marketingmasterList {
  id: number;
  marketing_type: string;
}
