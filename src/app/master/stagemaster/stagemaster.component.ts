import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stagemaster',
  templateUrl: './stagemaster.component.html',
  styleUrls: ['./stagemaster.component.css']
})
export class StagemasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Stage Name', 'Action'];
  dataSource = new MatTableDataSource<stageList>;
  stagelist:stageList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stagemasterform = new FormGroup({
    id : new FormControl(0),
    stage_name : new FormControl(''),
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.stagemasterform.reset();
    this.getData();
  }

  getData(){
    let type = 'stage_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stagelist = data.lists;
      this.dataSource = new MatTableDataSource(this.stagelist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.stagemasterform.controls.id.value;
    let obj = this.stagemasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_stage';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_stage/';
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
        this.stagemasterform.patchValue({
          id : element.id,
          stage_name : element.stage_name,
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
        let type = 'delete_stage/'
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

export interface stageList {
  id: number;
  stage_name: string;
}


