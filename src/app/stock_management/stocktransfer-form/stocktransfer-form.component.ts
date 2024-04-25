import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-stocktransfer-form',
  templateUrl: './stocktransfer-form.component.html',
  styleUrls: ['./stocktransfer-form.component.css']
})
export class StocktransferFormComponent {

  displayedColumns: string[] = ['Sr No.','Material','Current Quantity','Transfer Quantity','Balance','Action'];
  dataSource = new MatTableDataSource<stocktransferList>;
  stocktransferlist:stocktransferList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocktransferlistform = new FormGroup({
    id : new FormControl(0),
    fsite : new FormControl(''),
    tsite : new FormControl(''),
    dates : new FormControl(''),
    material :new FormControl(''),
    curr :new FormControl(''),
    tran :new FormControl(''),
    rea :new FormControl('')
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

export interface stocktransferList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
