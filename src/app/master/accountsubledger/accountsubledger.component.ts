import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsubledger',
  templateUrl: './accountsubledger.component.html',
  styleUrls: ['./accountsubledger.component.css']
})
export class AccountsubledgerComponent {

  displayedColumns: string[] = ['Sr No.', 'Under Main Ledger', 'Sub Ledger','Description', 'Action'];
  dataSource = new MatTableDataSource<subledgerList>;
  subledgerlist:subledgerList [] = [];
  MainLedgerList:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  subledgerform = new FormGroup({
    id : new FormControl(0),
    main_ledger_name : new FormControl(''),
    sub_ledger_name : new FormControl(''),
    description:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.subledgerform.reset();
    this.getData();
    this.getMainLedgerData();
  }

  getMainLedgerData(){
    let type = 'AccountMainLedger_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.MainLedgerList = data.lists;
    });
  }

  getData(){
    let type = 'AccountSubLedger_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.subledgerlist = data.lists;
      this.dataSource = new MatTableDataSource(this.subledgerlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.subledgerform.controls.id.value;
    let obj = this.subledgerform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_AccountSubLedger';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_AccountSubLedger/';
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
        this.subledgerform.patchValue({
          id : element.id,
          main_ledger_name : element.main_ledger_name,
          sub_ledger_name : element.sub_ledger_name,
          description : element.description
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
        let type = 'delete_AccountSubLedger/'
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

export interface subledgerList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



