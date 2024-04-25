import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stagetypemaster',
  templateUrl: './stagetypemaster.component.html',
  styleUrls: ['./stagetypemaster.component.css']
})
export class StagetypemasterComponent {

  displayedColumns: string[] = ['Sr No.', 'Stage', 'Stage Type', 'Action'];
  dataSource = new MatTableDataSource<stagetypemasterList>;
  stagetypemasterlist:stagetypemasterList [] = [];
  stagelist:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stagetypemasterform = new FormGroup({
    id : new FormControl(0),
    stage_id:new FormControl(0),
    stagetypename : new FormControl(''),
    
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.stagetypemasterform.reset();
    this.getData();
    this.getStageData();
  }

  getStageData(){
    let type = 'stage_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stagelist = data.lists;
    });
  }

  getData(){
    let type = 'stagetypemaster_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stagetypemasterlist = data.lists;
      this.dataSource = new MatTableDataSource(this.stagetypemasterlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.stagetypemasterform.controls.id.value;
    let obj = this.stagetypemasterform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_stagetypemaster';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_stagetypemaster/';
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
        this.stagetypemasterform.patchValue({
          id : element.id,
          stage_id: element.stage_id,
          stagetypename: element.stagetypename,
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
        let type = 'delete_stagetypemaster/'
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

export interface stagetypemasterList {
  id: number;
  stage_id: number;
  stagetypename: string;
}
