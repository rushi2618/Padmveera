import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-sitelist',
  templateUrl: './sitelist.component.html',
  styleUrls: ['./sitelist.component.css']
})
export class SitelistComponent {
  displayedColumns: string[] = ['Sr No.', 'Site Name', 'Start Date','Site Incharge','Total Area','Plots', 'Action'];
  dataSource = new MatTableDataSource<siteList>;
  sitelist:siteList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  sitelistform = new FormGroup({
    id : new FormControl(0),
    search : new FormControl('')
  })
  constructor(public rest: RestService, private route:Router) {

  }

  submit(){
    
  }

  nexpage(){
    this.route.navigateByUrl('homepage/sitemanagement/sitemaster')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface siteList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
