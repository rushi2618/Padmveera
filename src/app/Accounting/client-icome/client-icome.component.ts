import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-icome',
  templateUrl: './client-icome.component.html',
  styleUrls: ['./client-icome.component.css']
})
export class ClientIcomeComponent {

  displayedColumns: string[] = ['Sr No.','Site Name','Client Name','Mobile No','Plot No','Area', 'Value Of Agreement','Grand Total', 'Remaining Balance','Action'];
  dataSource = new MatTableDataSource<clientincomeList>;
  clientincomelist:clientincomeList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  clientincomeform = new FormGroup({
    id : new FormControl(0),
    site:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
   
  }

  
  submit(){
    
  }

  

}

export interface clientincomeList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
