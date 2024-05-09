import { StagetypemasterComponent } from './master/stagetypemaster/stagetypemaster.component';
import { RegisterCustomer1Component } from './customer_management/register-customer1/register-customer1.component';
import { RegisteredCustomerComponent } from './customer_management/registered-customer/registered-customer.component';
import { VisitedCustomerComponent } from './customer_management/visited-customer/visited-customer.component';
import { PlotResellMComponent } from './plot_resell/plot-resell-m/plot-resell-m.component';
import { PlotReselllistComponent } from './plot_resell/plot-reselllist/plot-reselllist.component';
import { MarketingManagementComponent } from './marketing-management/marketing-management.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialmasterComponent } from './master/materialmaster/materialmaster.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StagemasterComponent } from './master/stagemaster/stagemaster.component';
import { AccountmainledgerComponent } from './master/accountmainledger/accountmainledger.component';
import { AccountsubledgerComponent } from './master/accountsubledger/accountsubledger.component';
import { MarketingmasterComponent } from './master/marketingmaster/marketingmaster.component';
import { VendormasterComponent } from './master/vendormaster/vendormaster.component';
import { BankmasterComponent } from './master/bankmaster/bankmaster.component';
import { UsermasterComponent } from './master/usermaster/usermaster.component';
import { VehiclemasterComponent } from './master/vehiclemaster/vehiclemaster.component';
import { UnitmasterComponent } from './master/unitmaster/unitmaster.component';
import { MarketingtypemasterComponent } from './master/marketingtypemaster/marketingtypemaster.component';
import { SitelistComponent } from './site-management/sitelist/sitelist.component';
import { SitemasterComponent } from './site-management/sitemaster/sitemaster.component';
import { MaterialRequisitionlistComponent } from './stock_management/material-requisitionlist/material-requisitionlist.component';
import { MaterialRequisitionformComponent } from './stock_management/material-requisitionform/material-requisitionform.component';
import { StockOrderformComponent } from './stock_management/stock-orderform/stock-orderform.component';
import { StockOrderlistComponent } from './stock_management/stock-orderlist/stock-orderlist.component';
import { StockinwardlistComponent } from './stock_management/stockinwardlist/stockinwardlist.component';
import { StockconsumeListComponent } from './stock_management/stockconsume-list/stockconsume-list.component';
import { StockconsumeFormComponent } from './stock_management/stockconsume-form/stockconsume-form.component';
import { StocktransferListComponent } from './stock_management/stocktransfer-list/stocktransfer-list.component';
import { StocktransferFormComponent } from './stock_management/stocktransfer-form/stocktransfer-form.component';
import { StockinwardformComponent } from './stock_management/stockinwardform/stockinwardform.component';
import { SiteViewpageComponent } from './site-management/site-viewpage/site-viewpage.component';
import { EmployeeFormComponent } from './HR-Payroll/employee-form/employee-form.component';
import { EmployeeManagementComponent } from './HR-Payroll/employee-management/employee-management.component';
import { AccountTransactionComponent } from './Accounting/account-transaction/account-transaction.component';
import { BillingListComponent } from './Accounting/billing-list/billing-list.component';
import { ClientIcomeComponent } from './Accounting/client-icome/client-icome.component';
import { AccountReportComponent } from './Reporting/account-report/account-report.component';
import { AdvertisementReportComponent } from './Reporting/advertisement-report/advertisement-report.component';
import { BillingReportComponent } from './Reporting/billing-report/billing-report.component';
import { BookingReportComponent } from './Reporting/booking-report/booking-report.component';
import { CrmReportComponent } from './Reporting/crm-report/crm-report.component';
import { EmployeeReportComponent } from './Reporting/employee-report/employee-report.component';
import { FollowupReportComponent } from './Reporting/followup-report/followup-report.component';
import { OfficeReportComponent } from './Reporting/office-report/office-report.component';
import { StagesReportComponent } from './Reporting/stages-report/stages-report.component';
import { StockReportComponent } from './Reporting/stock-report/stock-report.component';
import { SocialmediaReportComponent } from './Reporting/socialmedia-report/socialmedia-report.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {
    path:'homepage',
    component:HomeComponent,
    children: [
      {path:'dashboard',component:DashboardComponent},
      {path:'master/materialmaster',component:MaterialmasterComponent},
      {path:'master/stagemaster',component:StagemasterComponent},
      {path:'master/mainledger',component:AccountmainledgerComponent},
      {path:'master/subledger',component:AccountsubledgerComponent},
      {path:'master/marketingmaster',component:MarketingmasterComponent},
      {path:'master/vendormaster',component:VendormasterComponent},
      {path:'master/bankmaster',component:BankmasterComponent},
      {path:'master/usermaster',component:UsermasterComponent},
      {path:'master/vehiclemaster',component:VehiclemasterComponent},
      {path:'master/unitmaster',component:UnitmasterComponent},
      {path:'master/marketingtypemaster',component:MarketingtypemasterComponent},
      {path:'sitemanagement/sitelist',component:SitelistComponent},
      {path:'sitemanagement/sitemaster',component:SitemasterComponent},
      {path:'stockmanagement/materialrlist',component:MaterialRequisitionlistComponent},
      {path:'stockmanagement/materialrform',component:MaterialRequisitionformComponent},
      {path:'stockmanagement/stocklist',component:StockOrderlistComponent},
      {path:'stockmanagement/stockform',component:StockOrderformComponent},
      {path:'stockmanagement/stockinwardlist',component:StockinwardlistComponent},
      {path:'stockmanagement/stockinwardform',component:StockinwardformComponent},
      {path:'stockmanagement/stockconsumelist',component:StockconsumeListComponent},
      {path:'stockmanagement/stockconsumeform',component:StockconsumeFormComponent},
      {path:'stockmanagement/stocktransferlist',component:StocktransferListComponent},
      {path:'stockmanagement/stocktransferform',component:StocktransferFormComponent},
      {path:'taskmanagement', component:TaskmanagementComponent},
      {path:'marketingmanagement',component:MarketingManagementComponent},
      {path:'plotresellList',component:PlotReselllistComponent},
      {path:'plotresellForm',component:PlotResellMComponent},
      {path:'customer-management/visited',component:VisitedCustomerComponent},
      {path:'master/stagetypemaster',component:StagetypemasterComponent},
      {path:'customer-management/registered',component:RegisteredCustomerComponent},
      {path:'customer-management/registered1',component:RegisterCustomer1Component},
      {path:'Reporting/billing-report',component:BillingReportComponent},
      {path:'Reporting/office-report',component:OfficeReportComponent},
      {path:'Reporting/booking-report',component:BookingReportComponent},
      {path:'Reporting/stock-report',component:StockReportComponent},
      {path:'Reporting/crm-report',component:CrmReportComponent},
      {path:'Reporting/followup-report',component:FollowupReportComponent},
      {path:'Reporting/employee-report',component:EmployeeReportComponent},
      {path:'Reporting/advertisement-report',component:AdvertisementReportComponent},
      {path:'Reporting/socialmedia-report',component:SocialmediaReportComponent},
      {path:'Reporting/stages-report',component:StagesReportComponent},
      {path:'Reporting/account-report',component:AccountReportComponent},
      {path:'Accounting/account-transaction',component:AccountTransactionComponent},
      {path:'Accounting/expense-transaction',component:BillingListComponent},
      {path:'Accounting/income-transaction/client-income',component:ClientIcomeComponent},
      {path:'HR-Payroll/employee-management',component:EmployeeManagementComponent},
      {path:'HR-Payroll/employee-form',component:EmployeeFormComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
