import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stockinwardlist',
  templateUrl: './stockinwardlist.component.html',
  styleUrls: ['./stockinwardlist.component.css']
})
export class StockinwardlistComponent {

  displayedColumns: string[] = ['Sr No.','Chalan No','Site Name','Date','Vendor Name','Stage Name','Action'];
  dataSource = new MatTableDataSource<stockorderList>;
  stockorderlist:stockorderList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocklistform = new FormGroup({
    id : new FormControl(0),
    dates : new FormControl(''),
    site : new FormControl(''),
    vendor :new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.getData();
  }

  search(){

  }

  getData(){
    let type = 'stockinward_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stockorderlist = data.lists;
      this.dataSource = new MatTableDataSource(this.stockorderlist);
      this.dataSource.paginator = this.paginator;
    });
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
        this.rest.EditID = element.id;
        this.nexpage();
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
        let type = 'delete_stockinward/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }

  nexpage(){
    this.router.navigateByUrl('homepage/stockmanagement/stockinwardform');
  }
}

export interface stockorderList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
