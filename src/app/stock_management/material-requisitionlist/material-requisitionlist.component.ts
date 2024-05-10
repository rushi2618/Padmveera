import { RestService } from './../../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-material-requisitionlist',
  templateUrl: './material-requisitionlist.component.html',
  styleUrls: ['./material-requisitionlist.component.css']
})
export class MaterialRequisitionlistComponent {

  displayedColumns: string[] = ['Sr No.', 'Date', 'Site Name', 'Stage Name','Material','Quantaty','Send To','Approval', 'Action'];
  dataSource = new MatTableDataSource<materialrequisitionList>;
  materialrequisitionlist:materialrequisitionList [] = [];
  siteList:any[]=[];
  stageList:any[]=[];
  sortingMaterial:any[]=[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  materialrequisitionform = new FormGroup({
    id : new FormControl(0),
    date : new FormControl(''),
    sitename : new FormControl(''),
    stage_id:new FormControl(''),
    approval:new FormControl('')
  })
  constructor(public rest: RestService,private router:Router) {

  }

  ngOnInit():void{
    window.scrollTo(0,0);
    this.materialrequisitionform.reset();
    this.getSiteList();
    this.getStageList();
    this.getData();
  }

  getSiteList(){
    let type="SiteManagement_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.siteList=data.lists;
    });
  }

  approved(data:any){
    this.rest.dataID = data.id;
    this.router.navigateByUrl('homepage/stockmanagement/stockform');
  }

  approval(data:any){
    alert(this.rest.userID);
    if(this.rest.userID === data.send_to){
      let type = 'update_approve_status/'
      this.rest.updateApi(type,data).subscribe((element:any)=>{
        this.getData();
      });
    }else{
      Swal.fire('alert', 'You do not approve', 'error');
    }
  }

  getStageList(){
    let type="stage_lists"
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this.stageList=data.lists;
    });
  }

  getData(){
    let type = 'material_requisition_lists';
    this.rest.getDataApi(type).subscribe((data:any)=>{
      this. materialrequisitionlist = data.lists;
      this.dataSource = new MatTableDataSource(this. materialrequisitionlist);
      this.dataSource.paginator = this.paginator;
    });
  }

  MaterialRequisition(){
    this.router.navigateByUrl('homepage/stockmanagement/materialrform');
  }

  id:any;
  editData(data: any) {
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
        this.id = data.id;
        this.rest.EditID = this.id;
        this.MaterialRequisition();
      }
    });
  }

  // sortData(element:any){
  //   let obj = element;
  //   let type = 'sort_taskmanagement'
  //   let Dataforsort = obj.datesort + '/' + obj.AssignedTo + '/' + obj.Status;
  //   this.rest.getApi(type,Dataforsort).subscribe((data:any)=>{
  //     this.tasklist = data.lists;
  //     this.dataSource = new MatTableDataSource(this.tasklist);
  //     this.dataSource.paginator = this.paginator;
  //   })
  // }


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
        let type = 'delete_material/'
        this.rest.deleteDataApi(type,element).subscribe((data: any) => {
          Swal.fire('success', 'Data Delete Successfully', 'success');
          this.ngOnInit();
        },(err) => {
          Swal.fire('error', 'Data Not Delete', 'error');
        });
      }
    });
  }

  sortData(element:any){
    let obj = element;
    console.log(obj)
    let type = 'material_requisition_sorting/'
    let Dataforsort = obj.date + '/' + obj.sitename + '/' + obj.stage_id + '/' + obj.approval;
    this.rest.getApi(type,Dataforsort).subscribe((data:any)=>{
      this. materialrequisitionlist = data.lists;
      this.dataSource = new MatTableDataSource(this. materialrequisitionlist);
      this.dataSource.paginator = this.paginator;
    })
  }

  submit(){
    
  }

  nextP(){
    this.router.navigateByUrl('homepage/stockmanagement/materialrform')
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
