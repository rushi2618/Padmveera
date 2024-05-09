import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-material-requisitionform',
  templateUrl: './material-requisitionform.component.html',
  styleUrls: ['./material-requisitionform.component.css']
})
export class MaterialRequisitionformComponent {
  
  dataSource = new MatTableDataSource<materialrequisitionList>;
  materialrequisitionlist:materialrequisitionList [] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  siteList:any[]=[];
  stageList:any[]=[];
  materialList:any[]=[];
  sendToList:any[]=[];
  editSingleData:any = [];

  materialrequisitionform = new FormGroup({
    id : new FormControl(0),
    sitename : new FormControl(''),
    date : new FormControl(''),
    stage_id:new FormControl(''),
    material:new FormControl(''),
    quantity:new FormControl(''),
    send_to:new FormControl('')
  })
  constructor(public rest: RestService, private route:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    if(this.rest.EditID > 0){
      let type = 'single_material_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(this.rest.EditID);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.materialrequisitionform.reset();
    this.getSiteList();
    this.getStageList();
    this.getMaterialList();
    this.getSendToList();
  }

  getSiteList(){
    let type="SiteManagement_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList=data.lists;
    });
  }

  updateFormData(){
    this. materialrequisitionform.patchValue({
      id: this.editSingleData[0].id,
      sitename: this.editSingleData[0].sitename,
      date: this.editSingleData[0].date,
      stage_id: this.editSingleData[0].stage_id,
      material: this.editSingleData[0].material,
      quantity: this.editSingleData[0].quantity,
      send_to: this.editSingleData[0].send_to,
    });
  }

  getStageList(){
    let type="stage_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stageList=data.lists;
    });
  }

  getMaterialList(){
    let type="stock_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.materialList=data.lists;
    });
  }

  getSendToList(){
    let type="send_to_list"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.sendToList=data.lists;
    });
  }

  backPage(){
    this.route.navigateByUrl('homepage/stockmanagement/materialrlist')
  }

  submit(){
    let ID=this.materialrequisitionform.controls.id.value;
    let obj=this.materialrequisitionform.value;
    console.log(obj);
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_material_requisition';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_material_requisition/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
      });
    }
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface materialrequisitionList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
