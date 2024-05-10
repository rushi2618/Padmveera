import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stocktransfer-list',
  templateUrl: './stocktransfer-list.component.html',
  styleUrls: ['./stocktransfer-list.component.css']
})
export class StocktransferListComponent {

  displayedColumns: string[] = ['Sr No.','Date','From Site','To Site','Material','Current Quantity','Transfer Quantity','Balance','Action'];
  dataSource = new MatTableDataSource<stocktransferList>;
  stocktransferlist:stocktransferList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocklistform = new FormGroup({
    id : new FormControl(0),
    dates : new FormControl(''),
    fsite : new FormControl(''),
    tsite : new FormControl(''),
    material :new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  ngOnInit():void{
    this.getData();
  }

  submit(){
    
  }


  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/stocktransferform')
  }

  getData(){
    let type = 'stock_transfer_lists';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stocktransferlist = data.lists;
      this.dataSource = new MatTableDataSource(this.stocktransferlist);
      this.dataSource.paginator = this.paginator;
    })
  }

  StockTransfer(){
    this.router.navigateByUrl('homepage/stockmanagement/stocktransferform');
  }

  id:any;
  EditRow(data: any) {
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
        this.StockTransfer();
      }
    });
  }

  DeleteRow(data: any) {
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
        let type = 'delete_stock_tansfer/'
        this.rest.deleteDataApi(type,data).subscribe(
          (data: any) => {
            Swal.fire('success', 'Data Delete Successfully', 'success');
            this.getData();
          },
          (err) => {
            Swal.fire('error', 'Data Not Delete', 'error');
          }
        );
      }
    });
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface stocktransferList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
