import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild, ElementRef} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stock-orderform',
  templateUrl: './stock-orderform.component.html',
  styleUrls: ['./stock-orderform.component.css']
})
export class StockOrderformComponent {
  displayedColumns: string[] = ['Sr No.', 'Material', 'Rate','Ordered Quantity','Total','Action'];
  dataSource = new MatTableDataSource<stockorderList>;
  stockorderlist:stockorderList [] = [];
  tableData:any = [];
  materiallist:any = [];
  stagelist:any = [];
  stagetypemasterlist:any = [];
  vendormasterlist:any = [];
  sitelist:any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('myButton') myButton!: ElementRef;

  stockorderform = new FormGroup({
    id : new FormControl(0),
    site_name: new FormControl(0),
    date: new FormControl(''),
    stage_name: new FormControl(0),
    vendor_name: new FormControl(0),
    type: new FormControl(0),
    TableData: new FormControl([])
  });

  orderModelForm = new FormGroup({
    id: new FormControl(0),
    sid: new FormControl(0),
    site_name: new FormControl(0),
    date: new FormControl(''),
    materialName: new FormControl(''),
    vendor_name: new FormControl(0),
    stage_name: new FormControl(0),
    type: new FormControl(0),
    material_name: new FormControl(0),
    rate: new FormControl(),
    ordered_quantity: new FormControl(),
    amount: new FormControl(0),
    gst: new FormControl(0),
  });

  constructor(public rest: RestService, public route: Router) {

  }

  editSingleData:any;
  editData: any = [];
  ngOnInit():void{
    window.scrollTo(0,0);
    this.tableData = [];
    this.stockorderlist = [];
    this.dataSource = new MatTableDataSource(this.stockorderlist);
    this.stockorderform.reset();
    this.stockorderform.controls.date.setValue(this.rest.TodayDate);
    if (this.rest.dataID > 0) {
      let type = 'single_material_data/'
      this.rest.getApi(type, this.rest.dataID).subscribe((data: any) => {
        this.editData = data.single_data; 
        this.UpdateData();
      })
      this.rest.dataID = 0;
    }
    if(this.rest.EditID > 0){
      // alert(this.rest.EditID);
      let type = 'single_stockorderdetails_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.getMaterial();
    this.getStage();
    this.getVendor();
    this.getSiteList();
  }

  UpdateData() {
    this.stockorderform.patchValue({
      site_name : this.editData[0].sitename,
      stage_name : this.editData[0].stage_id,
      type: this.editData[0].type,
    });
    this.getStageType(this.editData[0].sitename);
  }

  updateFormData(){
    this.stockorderform.patchValue({
      id: this.editSingleData.id,
      site_name: this.editSingleData.site_name,
      date: this.editSingleData.date,
      stage_name: this.editSingleData.stage_name,
      vendor_name: this.editSingleData.vendor_name,
      type: this.editSingleData.type,
    });
    this.getStageType(this.editSingleData.site_name);
    this.getorders();
  }

  getdata(){
    if(this.editData.length > 0){
      this.orderModelForm.controls.material_name.setValue(this.editData[0].material);
      this.orderModelForm.controls.ordered_quantity.setValue(this.editData[0].quantity);
    }
  }

  getMaterial(){
    let type = 'stock_lists/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
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
    let stageid = this.stockorderform.controls.stage_name.value;
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
    let ID = this.stockorderform.controls.id.value;
    if(ID == 0 || ID == null || ID == undefined){
      this.stockorderlist = this.tableData
      this.stockorderform.controls.TableData.setValue(this.tableData);
      this.dataSource = new MatTableDataSource(this.stockorderlist);
      this.dataSource.paginator = this.paginator;
    }else{
      let type = 'Stockorder_material_list/'
      this.rest.getApi(type,ID).subscribe((data:any)=>{
        this.stockorderlist = data.lists;
        this.dataSource = new MatTableDataSource(this.stockorderlist);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  TotalAmt: any = [];
  quantity:any = 0;
  rate:any = 0;
  gst_rate:any = 0;
  t_amount:any = 0;
  calculatePrice() {
    this.quantity = parseFloat(this.orderModelForm.controls.ordered_quantity.value);
    this.rate = parseFloat(this.orderModelForm.controls.rate.value);
    this.TotalAmt = (this.quantity * this.rate);
  }

  calculateNetAmount() {
    this.gst_rate = this.orderModelForm.controls.gst.value;
    this.t_amount = this.TotalAmt + (this.gst_rate * this.quantity * this.rate);
    this.orderModelForm.controls.amount.setValue(this.t_amount);
  }

  saveOrder(){
    let ID = this.orderModelForm.controls.id.value;
    let obj = this.orderModelForm.value;
    obj.site_name = this.stockorderform.controls.site_name.value; 
    obj.sid = this.stockorderform.controls.id.value;
    obj.date = this.stockorderform.controls.date.value;
    obj.stage_name = this.stockorderform.controls.stage_name.value;
    obj.vendor_name = this.stockorderform.controls.vendor_name.value;
    obj.type = this.stockorderform.controls.type.value;
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_Stockorder';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.resetModel();
        this.getorders();
      });
    }else{
      let type1 = 'update_Stockorder/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.resetModel();
        this.getorders();
      });
    }
  }

  plotCount:any = '';
  SaveModelData(data: any) {
    let ID = this.stockorderform.controls.id.value;
    data.type = this.stockorderform.controls.type.value;
    this.materiallist.forEach((element:any) => {
      if(element.id == data.material_name){
        data.materialName = element.material_name;
      }
    })
    if(ID == 0 || ID == null || ID == undefined){
      if(this.editID > 0){
        for (let i = 0; i < this.tableData.length; i++) {
          if(i == this.editID - 1){
            this.tableData[i] = data;
            break;
          }
        }
        Swal.fire('success', "Data Updated Successful", 'success');
      }else{
        this.tableData.push(data);
        Swal.fire('success', "Data Saved Successful", 'success');
      }
      this.getorders();
      this.editID = 0;
      this.resetModel();
    }else{
      this.saveOrder();
    }
  }

  editID:any = 0;
  EditModelData(data: any, id: any) {
    this.editID = id;
    this.orderModelForm.patchValue({
      id : data.id,
      sid: data.sid,
      site_name: data.site_name,
      date: data.date,
      vendor_name: data.vendor_name,
      stage_name: data.stage_name,
      type: data.type,
      material_name: data.material_name,
      rate: data.rate,
      ordered_quantity: data.ordered_quantity,
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
        let ID = this.stockorderform.controls.id.value;
        if(ID == 0 || ID == null || ID == undefined){
          const index = this.tableData.indexOf(data);
          if (index > -1) {
            this.tableData.splice(index, 1);
            Swal.fire('success', 'Data Delete Successfully', 'success');
          }
        }else{
          let type = 'delete_Stockorder/'
          this.rest.deleteDataApi(type,data.id).subscribe((data: any) => {
            Swal.fire('success', 'Data Delete Successfully', 'success');
          },(err) => {
            Swal.fire('error', 'Data Not Delete', 'error');
          });
        }
        this.getorders();
      }
    })
  }

  resetModel(){
    this.orderModelForm.reset();
  }

  submit(){
    let ID = this.stockorderform.controls.id.value;
    let obj = this.stockorderform.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_stockorderdetails';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        if(this.editData.length > 0){
          let data = this.editData[0]
          let type = 'update_approve_status_new/'
          this.rest.updateApi(type,data).subscribe((element:any)=>{
            
          });
        }
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_stockorderdetails/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
        this.back();
      });
    }
  }

  back(){
    this.route.navigateByUrl('homepage/stockmanagement/stocklist');
  }
}

export interface stockorderList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
