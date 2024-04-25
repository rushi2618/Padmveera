import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-stockconsume-form',
  templateUrl: './stockconsume-form.component.html',
  styleUrls: ['./stockconsume-form.component.css']
})
export class StockconsumeFormComponent {

  dataSource = new MatTableDataSource<stockconsumeList>;
  stockconsumelist:stockconsumeList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stockconsumeform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    dates : new FormControl(''),
    stage:new FormControl(''),
    stock:new FormControl(''),
    quantity:new FormControl(''),
    send:new FormControl(''),
    remark:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){
    
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
