import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unitmaster',
  templateUrl: './unitmaster.component.html',
  styleUrls: ['./unitmaster.component.css']
})
export class UnitmasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Unit', 'Action'];
  dataSource = new MatTableDataSource<unitmasterList>;
  unitmasterlist:unitmasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  unitmasterform = new FormGroup({
    id : new FormControl(0),
    unit : new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.unitmasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'unitmaster_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.unitmasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.unitmasterlist);
      this.dataSource.paginator = this.paginator;
    })
  }

  submit(){
    let ID = this.unitmasterform.controls.id.value;
    let obj = this.unitmasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_unitmaster';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_unitmaster/';
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
        let type = 'single_unitmaster_data/';
        this.rest.getApi(type,element).subscribe((data:any)=>{
          console.log(data.single_data);
          this.unitmasterform.patchValue({
            id : data.single_data.id,
            unit : data.single_data.unit
          });
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
        let type = 'delete_unitmaster/'
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

export interface unitmasterList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
