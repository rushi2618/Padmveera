import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountmainledger',
  templateUrl: './accountmainledger.component.html',
  styleUrls: ['./accountmainledger.component.css']
})
export class AccountmainledgerComponent {
  displayedColumns: string[] = ['Sr No.', 'Main Ledger', 'Type','Description', 'Action'];
  dataSource = new MatTableDataSource<mainledgerList>;
  mainledgerlist:mainledgerList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  mainledgerform = new FormGroup({
    id : new FormControl(0),
    main_ledger_name : new FormControl(''),
    type : new FormControl(''),
    description:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.mainledgerform.reset();
    this.getData();
  }

  getData(){
    let type = 'AccountMainLedger_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.mainledgerlist = data.lists;
      this.dataSource = new MatTableDataSource(this.mainledgerlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  submit(){
    let ID = this.mainledgerform.controls.id.value;
    let obj = this.mainledgerform.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_AccountMainLedger';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_AccountMainLedger/';
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
        this.mainledgerform.patchValue({
          id : element.id,
          main_ledger_name : element.main_ledger_name,
          type : element.type,
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
        let type = 'delete_AccountMainLedger/'
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

export interface mainledgerList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}


