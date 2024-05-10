import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild,} from '@angular/core';
import {MatPaginator,MatPaginatorModule} from '@angular/material/paginator'
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {formatDate} from '@angular/common'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stocktransfer-form',
  templateUrl: './stocktransfer-form.component.html',
  styleUrls: ['./stocktransfer-form.component.css']
})
export class StocktransferFormComponent {

  displayedColumns: string[] = ['Sr No.','Material','Current Quantity','Transfer Quantity','Balance','Action'];
  dataSource = new MatTableDataSource<stocktransferList>;
  stocktransferlist:stocktransferList [] = [];
  siteList:any[]=[];
  materialList:any[]=[];
  tableData:any = [];
  isUpdate:boolean=true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  stocktransferlistform = new FormGroup({
    id: new FormControl(0),
    from_site: new FormControl(''),
    date: new FormControl(''),
    to_site: new FormControl(''),
    material: new FormControl(''),
    current_qty: new FormControl(''),
    transfer_qty: new FormControl(0),
    balance: new FormControl(0),
    TableData: new FormControl([]),
  })
  constructor(public rest: RestService,private router:Router) {

  }
  Date:any;
  editSingleData:any = [];
  ngOnInit():void{
    //this.getMaterialList();
    this.getSiteList();
    this.tableData=[];
    this.Date = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.stocktransferlistform.controls.date.setValue(this.Date);
    if(this.rest.EditID > 0){
      this.isUpdate=false;
      let type = 'single_stockTransfer_data/';
      this.rest.getApi(type,this.rest.EditID).subscribe((data: any)=>{
        console.log(data);
        this.editSingleData = data.single_data;
        this.updateFormData();
      });
      this.rest.EditID = 0;
    }
    //this.getData();
  }

  updateFormData(){
    console.log(this.editSingleData.current_qty)
    this.stocktransferlistform.controls.id.setValue(this.editSingleData.id);
    this.stocktransferlistform.controls.from_site.setValue(this.editSingleData.from_site);
    this.stocktransferlistform.controls.date.setValue(this.editSingleData.date);
    this.stocktransferlistform.controls.to_site.setValue(this.editSingleData.to_site);
    this.stocktransferlistform.controls.material.setValue(this.editSingleData.material);
    this.stocktransferlistform.controls.current_qty.setValue(this.editSingleData.current_qty);
    this.stocktransferlistform.controls.transfer_qty.setValue(this.editSingleData.transfer_qty);
    //this.stocktransferlistform.controls.balance.setValue(this.editSingleData.balance);
  }

   tq:any = 0;
   Current_qty:any = 0;
  Transfer_qty:any = 0;
  Total_Amout:any = 0;
  simpleCalculation(){
    this.Current_qty = this. stocktransferlistform .controls.current_qty.value;
    this.Transfer_qty = this. stocktransferlistform .controls.transfer_qty.value;
    this.Total_Amout = parseInt(this.Current_qty) - parseInt(this.Transfer_qty);
    this. stocktransferlistform .controls.balance.setValue(this.Total_Amout);
  }
  addData(){
    this.tq = parseInt(this.Transfer_qty);
    if( this.tq <= 0 || Number.isNaN(this.tq)){
    }else{
      if(this.Total_Amout < 0 || Number.isNaN(this.Total_Amout)){
        Swal.fire('alert', "Insufficient Stock", 'error');
      }else{
        let temp = {
          material: this. stocktransferlistform .controls.material.value,
          current_qty: this. stocktransferlistform .controls.current_qty.value,
          transfer_qty: this. stocktransferlistform.controls.transfer_qty.value,
          balance: this. stocktransferlistform .controls.balance.value,
        }
        // alert(JSON.stringify(temp));
        this.tableData.push(temp);
        this.tableAllData();
        this.stocktransferlistform .controls.material.reset();
        this.stocktransferlistform .controls.current_qty.reset();
        this.stocktransferlistform .controls.transfer_qty.reset();
        this.stocktransferlistform .controls.balance.reset();
      }
    }
  }

  tableAllData(){
    this.stocktransferlist = this.tableData;
    this.dataSource = new MatTableDataSource(this.stocktransferlist);
    this.stocktransferlistform.controls.TableData.setValue(this.tableData);
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
        const index = this.tableData.indexOf(data);
        if (index > -1) {
          this.tableData.splice(index, 1);
        }
        this.tableAllData();
      }
    });
  }

  getSiteList(){
    let type="SiteManagement_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList=data.lists;
    });
  }

  getMaterial(){
    let type = 'get_material_name/';
    let obj = this.stocktransferlistform.controls.from_site.value;
    this.rest.getApi(type,obj).subscribe((data:any)=>{
      this.materialList = data.result;
    })
  }

  getremainingStock(){
    let type = 'remaining_stock/';
    let obj = this.stocktransferlistform.controls.from_site.value + '/' + this.stocktransferlistform.controls.material.value;
    this.rest.getApi(type,obj).subscribe((data:any)=>{
      let remaining = data.remain;
      this.stocktransferlistform.controls.current_qty.setValue(remaining)
    })
  }

  // getData(){
  //   let type = 'stock_transfer_lists';
  //   this.rest.getDataApi(type).subscribe((data:any)=>{
  //     this.stocktransferlist = data.lists;
  //     this.dataSource = new MatTableDataSource(this.stocktransferlist);
  //     this.dataSource.paginator = this.paginator;
  //   });
  // }


  submit(value:any){
    let ID=this.stocktransferlistform.controls.id.value;
    let obj=value;
    console.log(obj);
    if (ID == 0 || ID == null || ID == undefined){
      let type = 'store_stock_transfer';
      this.rest.PostApi(type,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Saved Successful", 'success');
        this.ngOnInit();
        this.stocktransferlistform.reset();
        window.location.reload();
      });
    }else{
      let type1 = 'update_stock_transfer/';
      this.rest.updateApi(type1,obj).subscribe((data:any)=>{
        Swal.fire('success', "Data Updated Successful", 'success');
        this.ngOnInit();
        this.stocktransferlistform.reset();
      });
    }
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/stockconsumeform')
  }
  // 
  // this.dataSource = new MatTableDataSource(this.inwardList);
  // this.dataSource.paginator = this.paginator;

}

export interface stocktransferList {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
