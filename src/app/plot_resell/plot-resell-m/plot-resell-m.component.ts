import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-plot-resell-m',
  templateUrl: './plot-resell-m.component.html',
  styleUrls: ['./plot-resell-m.component.css']
})
export class PlotResellMComponent {

  dataSource = new MatTableDataSource<plotresellList>;
  plotreselllist:plotresellList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  plotresellform = new FormGroup({
    id : new FormControl(0),
    site: new FormControl(''),
    mainowner:new FormControl(''),
    plot : new FormControl(''),
    resoled:new FormControl(''),
    rate:new FormControl(''),
    end:new FormControl(''),
    status:new FormControl(''),
    desc:new FormControl('')
  })
  constructor(public rest: RestService) {

  }

  submit(){
    
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
