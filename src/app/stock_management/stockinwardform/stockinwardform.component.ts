import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stockinwardform',
  templateUrl: './stockinwardform.component.html',
  styleUrls: ['./stockinwardform.component.css']
})
export class StockinwardformComponent {
  displayedColumns: string[] = ['Sr No.', 'Material', 'Rate','Ordered Quantity','Inward Quantity','Remaining Quantity','Total','Action'];
  dataSource = new MatTableDataSource<stockinwardList>;
  stockinwardlist:stockinwardList [] = [];
  materiallist:any = [];
  stagelist:any = [];
  stagetypemasterlist:any = [];
  vendormasterlist:any = [];
  sitelist:any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stockinwardform = new FormGroup({
    id : new FormControl(0),
    sid : new FormControl(),
    site_name : new FormControl(''),
    date : new FormControl(''),
    stage_name:new FormControl(''),
    type:new FormControl(''),
    chalan_no:new FormControl(''),
    vendor_name:new FormControl(''),
    vehical_no:new FormControl(''),
    upload_file:new FormControl('')
  });

  orderInwardform = new FormGroup({
    id : new FormControl(),
    material_name : new FormControl(),
    sid : new FormControl(),
    siid : new FormControl(),
    site_name : new FormControl(),
    date : new FormControl(),
    ordered_quantity : new FormControl(),
    inward_quantity : new FormControl(),
    chalan_no : new FormControl(),
    vehical_no : new FormControl(),
    rate : new FormControl(),
    amount : new FormControl(),
    vendor_name : new FormControl(),
    stage_name : new FormControl(),
    gst : new FormControl(),
    type : new FormControl(),
  });

  constructor(public rest: RestService, public route: Router) {

  }

  editSingleData:any;
  ngOnInit():void{
    window.scrollTo(0,0);
    this.stockinwardform.reset();
    this.stockinwardform.controls.date.setValue(this.rest.TodayDate);
    if(this.rest.EditID > 0){
      // alert(this.rest.EditID);
      let type = 'single_stockinward_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.getStage();
    this.getVendor();
    this.getSiteList();
  }

  updateFormData(){
    this.stockinwardform.patchValue({
      id: this.editSingleData.id,
      site_name: this.editSingleData.site_name,
      stage_name: this.editSingleData.stage_name,
      vendor_name: this.editSingleData.vendor_name,
      type: this.editSingleData.type,
      sid : this.editSingleData.sid,
      chalan_no:this.editSingleData.chalan_no,
      vehical_no:this.editSingleData.vehical_no,
    });
    if(this.stockinwardform.controls.chalan_no.value == null || this.stockinwardform.controls.chalan_no.value == '' || this.stockinwardform.controls.chalan_no.value == undefined){
      let type = 'get_chalan_no_stockinward/'
      this.rest.getDataApi(type).subscribe((data:any) =>{
        this.stockinwardform.controls.chalan_no.setValue(data.chalan_no);
      })
    }
    this.getMaterial();
    this.getStageType(this.editSingleData.stage_name);
    this.getorders();
  }

  getMaterial(){
    let type = 'Stockorder_material_list/';
    let obj = this.stockinwardform.controls.sid.value;
    this.rest.getApi(type,obj).subscribe((data: any) => {
      this.materiallist = data.lists;
    });
  }

  getStage(){
    let type = 'stage_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stagelist = data.lists;
    });
  }

  getStageType(element:any){
    let stageid = this.stockinwardform.controls.stage_name.value;
    let type = 'stagetype_list/';
    this.rest.getApi(type,stageid).subscribe((data:any)=>{
      this.stagetypemasterlist = data.lists;
    });
  }

  getVendor(){
    let type = 'vendor_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.vendormasterlist = data.lists;
    });
  }

  getSiteList(){
    let type = 'SiteManagement_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.sitelist = data.lists;
    });
  }

  getorders(){
    let ID = this.stockinwardform.controls.id.value;
    let type = 'order_inward/'
    this.rest.getApi(type,ID).subscribe((data:any)=>{
      this.stockinwardlist = data.lists;
      this.dataSource = new MatTableDataSource(this.stockinwardlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  TotalAmt: any = [];
  quantity:any = 0;
  rate:any = 0;
  gst_rate:any = 0;
  t_amount:any = 0;
  calculatePrice() {
    this.quantity = parseFloat(this.orderInwardform.controls.inward_quantity.value);
    this.rate = parseFloat(this.orderInwardform.controls.rate.value);
    this.TotalAmt = (this.quantity * this.rate);
  }

  calculateNetAmount() {
    this.gst_rate = this.orderInwardform.controls.gst.value;
    this.t_amount = this.TotalAmt + (this.gst_rate * this.quantity * this.rate);
    this.orderInwardform.controls.amount.setValue(this.t_amount);
  }

  getOrderedMaterial() {
    let materialn = this.orderInwardform.controls.material_name.value;
    this.materiallist.forEach((element:any)=>{
      if(element.material_name == materialn){
        this.orderInwardform.patchValue({
          rate: element.rate,
          ordered_quantity: element.remaining,
          gst: element.gst,
        });
      }
    });
  }

  plotCount:any = '';
  SaveModelData(data: any) {
    if(data.inward_quantity > data.ordered_quantity){
      Swal.fire('alert', "Insufficient Stock", 'error')
    }else{
      let ID = this.orderInwardform.controls.id.value;
      let obj = this.orderInwardform.value;
      obj.site_name = this.stockinwardform.controls.site_name.value; 
      obj.siid = this.stockinwardform.controls.id.value;
      obj.date = this.stockinwardform.controls.date.value;
      obj.stage_name = this.stockinwardform.controls.stage_name.value;
      obj.vendor_name = this.stockinwardform.controls.vendor_name.value;
      obj.type = this.stockinwardform.controls.type.value;
      obj.sid = this.stockinwardform.controls.sid.value;
      if (ID == 0 || ID == null || ID == undefined){
        let type = 'store_OrderDetails';
        this.rest.PostApi(type,obj).subscribe((data:any)=>{
          Swal.fire('success', "Data Saved Successful", 'success');
          this.resetModel();
          this.getorders();
          this.getMaterial();
        });
      }else{
        let type1 = 'update_OrderDetails/';
        this.rest.updateApi(type1,obj).subscribe((data:any)=>{
          Swal.fire('success', "Data Updated Successful", 'success');
          this.resetModel();
          this.getorders();
          this.getMaterial();
        });
      }
    }
  }

  EditModelData(data: any) {
    this.orderInwardform.patchValue({
      id : data.id,
      material_name: data.material_name,
      rate: data.rate,
      ordered_quantity: data.ordered_quantity,
      inward_quantity: data.inward_quantity,
      amount: data.amount,
      gst: data.gst
    })
  }
  DeleteModelData(data: any) {
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
        let type = 'delete_OrderDetails/'
        this.rest.deleteDataApi(type,data).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
        this.getorders();
        this.getMaterial();
      }
    })
  }

  resetModel(){
    this.orderInwardform.reset();
  }

  submit(){
    let obj = this.stockinwardform.value; 
    let type1 = 'update_stockinward/';
    this.rest.updateApi(type1,obj).subscribe((data:any)=>{
      Swal.fire('success', "Data Updated Successful", 'success');
      this.ngOnInit();
      this.back();
    });
  }

  back(){
    this.route.navigateByUrl('homepage/stockmanagement/stockinwardlist');
  }
}

export interface stockinwardList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
