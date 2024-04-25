import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';

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

  submit(){
    
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/stocktransferform')
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
