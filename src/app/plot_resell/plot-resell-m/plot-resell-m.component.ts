import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plot-resell-m',
  templateUrl: './plot-resell-m.component.html',
  styleUrls: ['./plot-resell-m.component.css']
})
export class PlotResellMComponent {
  siteList:any[]=[];

  plotresellform = new FormGroup({
    id: new FormControl(0),
    sitename: new FormControl(0),
    MainOwnerName: new FormControl(''),
    date: new FormControl(''),
    PlotSoldTo: new FormControl(''),
    Resold: new FormControl(''),
    rate: new FormControl(''),
    status: new FormControl(''),
    description: new FormControl(''),
  })
  constructor(public rest: RestService,private route: Router) {

  }

  editSingleData:any;
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.plotresellform.reset();
    this.plotresellform.controls.date.setValue(this.rest.TodayDate);
    if(this.rest.EditID > 0){
      let type = 'single_plot_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.getSiteList();
  }

  updateFormData(){
    this.plotresellform.patchValue({
      id: this.editSingleData.id,
      sitename: this.editSingleData.sitename,
      MainOwnerName: this.editSingleData.main_owner_name,
      date: this.editSingleData.end_date,
      PlotSoldTo: this.editSingleData.plot_sold_to,
      Resold: this.editSingleData.resold_to_customer,
      rate: this.editSingleData.rate,
      status: this.editSingleData.status,
      description: this.editSingleData.description,
    });
  }

  getSiteList(){
    let type = 'SiteManagement_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList = data.lists;
    });
  }

  submit(){
    let ID = this.plotresellform.controls.id.value;
    let obj = this.plotresellform.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_plot';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_plot/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
        this.back();
      });
    }
  }

  back(){
    this.route.navigateByUrl('homepage/plotresellList')
  }
  reset(){
    this.plotresellform.reset();
  }
}
