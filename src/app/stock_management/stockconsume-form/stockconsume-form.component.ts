import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stockconsume-form',
  templateUrl: './stockconsume-form.component.html',
  styleUrls: ['./stockconsume-form.component.css']
})
export class StockconsumeFormComponent {
  siteList:any []=[];
  materialList:any []=[];
  stagelist:any []=[];

  stockconsumeform = new FormGroup({
    id : new FormControl(0),
    site_name : new FormControl(''),
    date : new FormControl(''),
    unit:new FormControl(''),
    material_name:new FormControl(''),
    quantity:new FormControl(''),
    description:new FormControl(''),
    remark:new FormControl('')
  })
  constructor(public rest: RestService,private route: Router) {

  }

  editSingleData:any;
  ngOnInit(): void {
    window.scrollTo(0,0);
    this.stockconsumeform.reset();
    this.stockconsumeform.controls.date.setValue(this.rest.TodayDate);
    if(this.rest.EditID > 0){
      let type = 'single_StockConsumed_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.getSiteList();
    this.getStage();
  }

  updateFormData(){
    this.stockconsumeform.patchValue({
      id: this.editSingleData.id,
      site_name : this.editSingleData.site_name,
      date : this.editSingleData.date,
      unit:this.editSingleData.unit,
      material_name:this.editSingleData.material_name,
      quantity:this.editSingleData.quantity,
      description:this.editSingleData.description,
      remark:this.editSingleData.remark
    });
  }

  getSiteList(){
    let type = 'SiteManagement_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList = data.lists;
    });
  }

  getStage(){
    let type = 'stage_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stagelist = data.lists;
    });
  }

  getMaterialList(){
    let site_id = this.stockconsumeform.controls.site_name.value;
    let type = 'get_material_name/';
    this.rest.getApi(type,site_id).subscribe((data:any)=>{
      this.materialList = data.result;
    })
  }

  submit(){
    let ID = this.stockconsumeform.controls.id.value;
    let obj = this.stockconsumeform.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_StockConsumed';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_StockConsumed/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
        this.back();
      });
    }
  }

  back(){
    this.route.navigateByUrl('homepage/stockmanagement/stockconsumelist');
  }
}

export interface stockconsumeList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
