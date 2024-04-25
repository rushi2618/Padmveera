import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-stockinwardform',
  templateUrl: './stockinwardform.component.html',
  styleUrls: ['./stockinwardform.component.css']
})
export class StockinwardformComponent {
  displayedColumns: string[] = ['Sr No.', 'Material', 'Rate','Ordered Quantity','Inward Quantity','Remaining Quantity','Total','Action'];
  dataSource = new MatTableDataSource<stockinwardList>;
  stockinwardlist:stockinwardList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stockinwardform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    dates : new FormControl(''),
    stage:new FormControl(''),
    type:new FormControl(''),
    vendor:new FormControl(''),
    vechical:new FormControl(''),
    file:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){
    
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface stockinwardList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
