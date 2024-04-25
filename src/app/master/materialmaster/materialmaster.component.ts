import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-materialmaster',
  templateUrl: './materialmaster.component.html',
  styleUrls: ['./materialmaster.component.css'],
})
export class MaterialmasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Material Name', 'Unit', 'Action'];
  dataSource = new MatTableDataSource<materialList>;
  materiallist:materialList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  unitlist:any[]=[];
  materialmasterform = new FormGroup({
    id : new FormControl(0),
    material_name : new FormControl(''),
    material_unit : new FormControl(0)
  })
  constructor(public rest: RestService) {
  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.materialmasterform.reset();
    this.getData();
    this.getUnitData();
  }

  getUnitData(){
    let type = 'unitmaster_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.unitlist = data.lists;
    })
  }
  getData(){
    let type = 'stock_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.materiallist = data.lists;
      this.dataSource = new MatTableDataSource(this.materiallist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.materialmasterform.controls.id.value;
    let obj = this.materialmasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_stock';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_stock/';
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
        this.materialmasterform.patchValue({
          id : element.id,
          material_name : element.material_name,
          material_unit : element.material_unit
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
        let type = 'delete_stock/'
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

export interface materialList {
  id: number;
  material_name: string;
  material_unit: string;
}
