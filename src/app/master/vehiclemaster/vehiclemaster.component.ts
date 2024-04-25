import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehiclemaster',
  templateUrl: './vehiclemaster.component.html',
  styleUrls: ['./vehiclemaster.component.css']
})
export class VehiclemasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Vehicle Name', 'Action'];
  dataSource = new MatTableDataSource<vehiclemasterList>;
  vehiclemasterlist:vehiclemasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  vehiclemasterform = new FormGroup({
    id : new FormControl(0),
    vehicle_name : new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.vehiclemasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'vehicle_master_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.vehiclemasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.vehiclemasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.vehiclemasterform.controls.id.value;
    let obj = this.vehiclemasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_vehicle';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_vehicle/';
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
        this.vehiclemasterform.patchValue({
          id : element.id,
          vehicle_name : element.vehicle_name,
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
        let type = 'delete_vehicle/'
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

export interface vehiclemasterList {
  id: number;
  vehicle_name: string;
}
