import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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

  ngOnInit():void{
    window.scrollTo(0,0);
    this.getData();
  }

  getData(){
    let type = 'plot_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.plotreselllist = data.lists;
      this.dataSource = new MatTableDataSource(this.plotreselllist);
      this.dataSource.paginator = this.paginator;
    });
  }

  editData(element:any){
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to Edit Record ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Edit it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        this.rest.EditID = element.id;
        this.nexpage();
      }
    });
  }

  deleteData(element:any){
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this row?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        let type = 'delete_plot/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }
  nexpage(){
    this.route.navigateByUrl('homepage/plotresellForm')
  }
}

export interface plotresellList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
