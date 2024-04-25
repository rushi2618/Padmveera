import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-plot-reselllist',
  templateUrl: './plot-reselllist.component.html',
  styleUrls: ['./plot-reselllist.component.css']
})
export class PlotReselllistComponent {

  displayedColumns: string[] = ['Sr No.','End Date','Site Name', 'Main Owner name','Plot Sold To','Resold To Customer','Description','Rate','Status', 'Action'];
  dataSource = new MatTableDataSource<plotresellList>;
  plotreselllist:plotresellList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public rest: RestService, private route:Router) {

  }

  submit(){
    
  }

  nexpage(){
    this.route.navigateByUrl('homepage/plotresellForm')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface plotresellList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
