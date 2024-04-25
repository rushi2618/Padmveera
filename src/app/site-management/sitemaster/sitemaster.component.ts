import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-sitemaster',
  templateUrl: './sitemaster.component.html',
  styleUrls: ['./sitemaster.component.css']
})
export class SitemasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Plot No', 'Area sq.m','Area sq.ft','Goverment Rate','Company Rate', 'Action'];
  dataSource = new MatTableDataSource<sitemasterList>;
  plotlist:sitemasterList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  sitemasterform = new FormGroup({
    id : new FormControl(0),
    sitename : new FormControl(''),
    siteaddress : new FormControl(''),
    siteincharge : new FormControl(''),
    startdate : new FormControl(''),
    estimatedate : new FormControl(''),
    totalarea: new FormControl(''),
    plots : new FormControl('')
  })
 

  sitemastermodalform = new FormGroup({
    id : new FormControl(0),
    plotno : new FormControl(''),
    areasqm : new FormControl(''),
    areasqft : new FormControl(''),
    govrate : new FormControl(''),
    basicrate : new FormControl(''),
    bookingr: new FormControl(''),
    customerid : new FormControl(''),
    customername : new FormControl(''),
    address : new FormControl(''),
    mobile: new FormControl(''),
    reference : new FormControl('')
  })
  
  constructor(public rest: RestService) {
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.plotlist.push({id:1,plotno:32,areasqm:45,areasqft:788,govtrate:789,companyrate:11111});
    this.dataSource=new MatTableDataSource(this.plotlist)
  }

  submit(){
 
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface sitemasterList {
  id: number;
  plotno: number;
  areasqm: number;
  areasqft: number;
  govtrate:number;
  companyrate:number;
}


