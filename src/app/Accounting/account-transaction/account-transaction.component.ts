import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})
export class AccountTransactionComponent {

  displayedColumns: string[] = ['Sr.No', 'Bank Name','Branch Name','Account No','IFSC Code','Opening Balance', 'Action'];
  dataSource = new MatTableDataSource<accounttransactionList>;
  accounttransactionlist:accounttransactionList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  accounttransactionform = new FormGroup({
    id : new FormControl(0),
    e_type: new FormControl(''),
    date:new FormControl(''),
    received_by : new FormControl(''),
    receiver:new FormControl(''),
    site:new FormControl(''),
    purpose: new FormControl(''),
    main_ledger:new FormControl(''),
    sub_ledger : new FormControl(''),
    inc_exp:new FormControl(''),
    amount:new FormControl(''),
    balance:new FormControl(''),
    payment:new FormControl(''),
    narration:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){

  }

}

export interface accounttransactionList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

