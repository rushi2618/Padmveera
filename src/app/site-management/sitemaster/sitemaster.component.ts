import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild,ElementRef} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sitemaster',
  templateUrl: './sitemaster.component.html',
  styleUrls: ['./sitemaster.component.css']
})
export class SitemasterComponent {
  displayedColumns: string[] = ['Sr No.', 'Plot No', 'Area sq.m','Area sq.ft','Goverment Rate','Company Rate', 'Action'];
  dataSource = new MatTableDataSource<sitemasterList>;
  plotlist:sitemasterList [] = [];
  siteInchargeList:any [] = [];
  tableData:any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('myButton') myButton!: ElementRef;

  sitemasterform = new FormGroup({
    id : new FormControl(0),
    site_name : new FormControl(''),
    site_address : new FormControl(''),
    supervisor_name : new FormControl(''),
    starting_date : new FormControl(''),
    estimated_end_date : new FormControl(''),
    area: new FormControl(''),
    noofplot : new FormControl(0),
    TableData: new FormControl([])
  })
 

  sitemastermodalform = new FormGroup({
    id : new FormControl(0),
    site_id : new FormControl(0),
    site_name : new FormControl(''),
    plot_no : new FormControl(''),
    area_sqmt : new FormControl(''),
    area_sqft : new FormControl(''),
    government_rate : new FormControl(''),
    company_rate : new FormControl(''),
    booking_remark: new FormControl(''),
    customer_id : new FormControl(''),
    name : new FormControl(''),
    address : new FormControl(''),
    mobile_no: new FormControl(''),
    reference : new FormControl('')
  })
  
  constructor(public rest: RestService, private route:Router) {
    
  }

  editSingleData:any;
  ngOnInit():void{
    this.tableData = [];
    this.plotlist = [];
    this.dataSource = new MatTableDataSource(this.plotlist);
    window.scrollTo(0,0);
    this.sitemasterform.reset();
    this.sitemasterform.controls.starting_date.setValue(this.rest.TodayDate);
    if(this.rest.EditID > 0){
      // alert(this.rest.EditID);
      let type = 'single_SiteManagement_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    this.getUserData();
  }

  updateFormData(){
    this.sitemasterform.patchValue({
      id: this.editSingleData[0].id,
      site_name : this.editSingleData[0].site_name,
      site_address : this.editSingleData[0].site_address,
      supervisor_name : this.editSingleData[0].supervisor_name,
      starting_date : this.editSingleData[0].starting_date,
      estimated_end_date : this.editSingleData[0].estimated_end_date,
      area: this.editSingleData[0].area,
      noofplot : this.editSingleData[0].noofplot,
    });
    this.getPlots();
  }

  getUserData(){
    let type = 'list_user_master/';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteInchargeList = data.lists;
    });
  }

  getPlots(){
    let ID = this.sitemasterform.controls.id.value;
    if(ID == 0 || ID == null || ID == undefined){
      this.plotlist = this.tableData
      this.sitemasterform.controls.TableData.setValue(this.tableData);
      this.dataSource = new MatTableDataSource(this.plotlist);
      this.dataSource.paginator = this.paginator;
    }else{
      let type = 'sitewise_plot/'
      this.rest.getApi(type,ID).subscribe((data:any)=>{
        this.plotlist = data.lists;
        this.dataSource = new MatTableDataSource(this.plotlist);
        this.dataSource.paginator = this.paginator;
      })
    }
    
  }

  savePlot(){
    let ID = this.sitemastermodalform.controls.id.value;
    let obj = this.sitemastermodalform.value;
    obj.site_name = this.sitemasterform.controls.site_name.value; 
    obj.site_id = this.sitemasterform.controls.id.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_PlotArea';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.resetModel();
        this.getPlots();
      });
    }else{
      let type1 = 'update_PlotArea/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.resetModel();
        this.getPlots();
      });
    }
  }

  plotCount:any = '';
  SaveModelData(data: any) {
    this.plotCount = this.sitemasterform.controls.noofplot.value;
    if(this.plotCount < this.plotlist.length){
      Swal.fire('error', "You have Reached the Maximum Plot Limit", 'error')
    }else{
      if(data.plot_no > 0){
        let ID = this.sitemasterform.controls.id.value;
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
          this.getPlots();
          this.editID = 0;
          this.resetModel();
        }else{
          this.savePlot();
        }
      }
    }
  }

  editID:any = 0;
  EditModelData(data: any, id: any) {
    this.editID = id;
    this.sitemastermodalform.patchValue({
      id : data.id,
      site_id : data.site_id,
      plot_no : data.plot_no,
      area_sqmt : data.area_sqmt,
      area_sqft : data.area_sqft,
      government_rate : data.government_rate,
      company_rate : data.company_rate,
      booking_remark: data.booking_remark,
      customer_id : data.customer_id,
      name : data.name,
      address : data.address,
      mobile_no: data.mobile_no,
      reference : data.reference
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
        let ID = this.sitemasterform.controls.id.value;
        if(ID == 0 || ID == null || ID == undefined){
          const index = this.tableData.indexOf(data);
          if (index > -1) {
            this.tableData.splice(index, 1);
            Swal.fire('success', 'Data Delete Successfully', 'success');
          }
        }else{
          let type = 'delete_PlotArea/'
          this.rest.deleteDataApi(type,data.id).subscribe((data: any) => {
            Swal.fire('success', 'Data Delete Successfully', 'success');
          },(err) => {
            Swal.fire('error', 'Data Not Delete', 'error');
          });
        }
        this.getPlots();
      }
    })
  }

  resetModel(){
    this.sitemastermodalform.reset();
  }

  submit(){
    let ID = this.sitemasterform.controls.id.value;
    let obj = this.sitemasterform.value; 
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_SiteManagement';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
      });
    }else{
      let type1 = 'update_SiteManagement/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
      });
    }
  }

  back(){
    this.route.navigateByUrl('homepage/sitemanagement/sitelist');
  }
}

export interface sitemasterList {
  id: number;
  plotno: number;
  areasqm: number;
  areasqft: number;
  govtrate:number;
  companyrate:number;
}


