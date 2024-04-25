import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-stock-orderform',
  templateUrl: './stock-orderform.component.html',
  styleUrls: ['./stock-orderform.component.css']
})
export class StockOrderformComponent {
  displayedColumns: string[] = ['Sr No.', 'Material', 'Rate','Ordered Quantity','Total','Action'];
  dataSource = new MatTableDataSource<stockorderList>;
  rstockorderlist:stockorderList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stockorderform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    dates : new FormControl(''),
    vendor:new FormControl(''),
    stage:new FormControl(''),
    type:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){
    
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
