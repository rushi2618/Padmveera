import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stockconsume-list',
  templateUrl: './stockconsume-list.component.html',
  styleUrls: ['./stockconsume-list.component.css']
})
export class StockconsumeListComponent {

  displayedColumns: string[] = ['Sr No.','Site Name','Material','Quantity','Remark','Action'];
  dataSource = new MatTableDataSource<stockconsumeList>;
  stockconsumelist:stockconsumeList [] = [];
  sitelist:any[]=[];
  materialList:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocklistform = new FormGroup({
    id : new FormControl(0),
    dates : new FormControl(''),
    site : new FormControl(''),
    material :new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  ngOnInit():void{
    this.getData();
    this.getSiteList();
    this.getMaterialList();
  }

  submit(){
    
  }

  getData(){
    let type = 'StockConsumed_lists';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stockconsumelist = data.lists;
      this.dataSource = new MatTableDataSource(this.stockconsumelist);
      this.dataSource.paginator = this.paginator;
    });
  }

  getSiteList(){
    let type="SiteManagement_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.sitelist=data.lists;
    });
  }

  getMaterialList(){
    let type="stock_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.materialList=data.lists;
    });
  }

  StockConsumeList(){
    this.router.navigateByUrl('homepage/stockmanagement/stockconsumeform');
  }

  id:any;
  editData(data: any) {
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
        this.id = data.id;
        this.rest.EditID = this.id;
        this.StockConsumeList();
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
        let type = 'delete_StockConsumed/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/stockconsumeform')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface stockconsumeList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
