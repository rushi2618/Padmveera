import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-stockconsume-list',
  templateUrl: './stockconsume-list.component.html',
  styleUrls: ['./stockconsume-list.component.css']
})
export class StockconsumeListComponent {

  displayedColumns: string[] = ['Sr No.','Site Name','Material','Quantity','Remark','Action'];
  dataSource = new MatTableDataSource<stockconsumeList>;
  stockconsumelist:stockconsumeList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocklistform = new FormGroup({
    id : new FormControl(0),
    dates : new FormControl(''),
    site : new FormControl(''),
    material :new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  submit(){
    
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
