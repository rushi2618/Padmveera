import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-site-viewpage',
  templateUrl: './site-viewpage.component.html',
  styleUrls: ['./site-viewpage.component.css']
})
export class SiteViewpageComponent {
  displayedColumns: string[] = ['Sr No.', 'Plot No', 'Area sq.m','Area sq.ft','Goverment Rate','Company Rate'];
  dataSource = new MatTableDataSource<siteViewList>;
  siteViewlist:siteViewList [] = [];
  siteData:any[]=[];
  siteTableData:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(public rest: RestService,private router:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.getData();
    this.getData1();
  }

  getData(){
    let type = 'single_SiteManagement_data/';
    let id=2;
    this.rest.getDataApi(type+id).subscribe((data:any)=>{
     this.siteData= data.single_data;
    });
  }

  getData1(){
    let type = 'sitewise_plot/';
    let site_name='test1';
    this.rest.getDataApi(type+site_name).subscribe((data:any)=>{
      this.siteTableData = data.lists;
      this.dataSource = new MatTableDataSource(this.siteTableData);
      this.dataSource.paginator = this.paginator;
    });
  }

  
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface siteViewList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
