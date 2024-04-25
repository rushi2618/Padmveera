import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-material-requisitionform',
  templateUrl: './material-requisitionform.component.html',
  styleUrls: ['./material-requisitionform.component.css']
})
export class MaterialRequisitionformComponent {
  
  dataSource = new MatTableDataSource<materialrequisitionList>;
  materialrequisitionlist:materialrequisitionList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  mainledgerform = new FormGroup({
    id : new FormControl(0),
    site : new FormControl(''),
    dates : new FormControl(''),
    stage:new FormControl(''),
    material:new FormControl(''),
    order:new FormControl(''),
    send:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){
    
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
