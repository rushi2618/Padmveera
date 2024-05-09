import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent {

  displayedColumns: string[] = ['Sr No.','Site','Date','Received By','Received To','Purpose', 'Main Ledger','Sub Ledger', 'Qty','Unit','Rate','Bill','Paid','Income','Balance','MOP','Action'];
  dataSource = new MatTableDataSource<expensetransactionList>;
  expensetransactionlist:expensetransactionList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  expensetransactionform = new FormGroup({
    id : new FormControl(0),
    date:new FormControl(''),
    received_by : new FormControl(''),
    received_to:new FormControl(''),
    site:new FormControl(''),
    payment:new FormControl(''),
    purpose: new FormControl(''),
    main_ledger:new FormControl(''),
    sub_ledger : new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  ngOnInit():void{
   
  }

  
  submit(){
    
  }

  

}

export interface expensetransactionList {
  id : number;
  main_ledger_name : string;
  type : string;
  description : string;
}
