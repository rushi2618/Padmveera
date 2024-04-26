import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { TemplateRef, ViewChild } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }
  url: string = 'http://127.0.0.1:8000/api/';
  // url:string='https://shreetesting.smartsugarfactory.com/backend/api/'

  EditID: any;
  TodayDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  PostApi(type:any,data : any): Observable<any> {
    return this.http.post(this.url + type, data);
  }

  PostDataApi(type:any,data : any,item:any): Observable<any> {
    return this.http.post(this.url + type + item, data);
  }

  getApi(type:any,data: any): Observable<any> {
    return this.http.get(this.url + type + data);
  }

  getDataApi(type:any): Observable<any> {
    return this.http.get(this.url + type);
  }

  deleteApi(type:any,data: any): Observable<any> {
    return this.http.delete(this.url + type + data.id, data);
  }

  deleteDataApi(type:any,data: any): Observable<any> {
    return this.http.delete(this.url + type + data);
  }

  updateApi(type:any,data: any): Observable<any> {
    return this.http.post(this.url + type + data.id, data);
  }

  htt:string = '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'

  showLoader(decision: boolean) {
    if (decision == true) {

      //==========================
      Swal.fire({
        timerProgressBar: true,
        allowOutsideClick: false,
        showConfirmButton: false,
        html: this.htt,
        background: '#f0f8ff00',
        // backdrop: `
        // rgb(100 100 106 / 40%) `
      });
    }
    else {
      Swal.close()
    }
  }
}
