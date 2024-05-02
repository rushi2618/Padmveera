import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent {
  displayedColumns: string[] = ['Sr No.', 'Site Name', 'Start Date','Site Incharge','Total Area','Plots', 'Action'];
  dataSource = new MatTableDataSource<siteList>;
  sitelist:siteList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  sitelistform = new FormGroup({
    id : new FormControl(0),
    search : new FormControl('')
  })
  constructor(public rest: RestService, private route:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.getData();
  }

  search(){

  }

  getData(){
    let type = 'SiteManagement_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.sitelist = data.lists;
      this.dataSource = new MatTableDataSource(this.sitelist);
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
        let type = 'delete_SiteManagement/'
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
    this.route.navigateByUrl('homepage/sitemanagement/sitemaster')
  }
}

export interface siteList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
