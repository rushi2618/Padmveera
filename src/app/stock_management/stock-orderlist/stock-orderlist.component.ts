import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-orderlist',
  templateUrl: './stock-orderlist.component.html',
  styleUrls: ['./stock-orderlist.component.css']
})
export class StockOrderlistComponent {
  displayedColumns: string[] = ['Sr No.','Site Name','Date','Vendor Name','Stage Name','Action'];
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

  submit(){
    
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/stockform')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface stockorderList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
