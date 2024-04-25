import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-material-requisitionlist',
  templateUrl: './material-requisitionlist.component.html',
  styleUrls: ['./material-requisitionlist.component.css']
})
export class MaterialRequisitionlistComponent {

  displayedColumns: string[] = ['Sr No.', 'Date', 'Site Name','Material','Quantaty','Send To','Approval', 'Action'];
  dataSource = new MatTableDataSource<materialrequisitionList>;
  materialrequisitionlist:materialrequisitionList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  mainledgerform = new FormGroup({
    id : new FormControl(0),
    dates : new FormControl(''),
    site : new FormControl(''),
    stage:new FormControl(''),
    approval:new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  submit(){
    
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/materialrform')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface materialrequisitionList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
