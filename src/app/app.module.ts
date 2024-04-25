import { StagetypemasterComponent } from './master/stagetypemaster/stagetypemaster.component';
import { VisitedCustomerComponent } from './customer_management/visited-customer/visited-customer.component';
import { RegisteredCustomerComponent } from './customer_management/registered-customer/registered-customer.component';
import { RegisterCustomer1Component } from './customer_management/register-customer1/register-customer1.component';
import { MarketingManagementComponent } from './marketing-management/marketing-management.component';
import { PlotResellMComponent } from './plot_resell/plot-resell-m/plot-resell-m.component';
import { PlotReselllistComponent } from './plot_resell/plot-reselllist/plot-reselllist.component';
import { TaskmanagementComponent } from './taskmanagement/taskmanagement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestService } from './rest.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialmasterComponent } from './master/materialmaster/materialmaster.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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
import { StockOrderlistComponent } from './stock_management/stock-orderlist/stock-orderlist.component';
import { StockOrderformComponent } from './stock_management/stock-orderform/stock-orderform.component';
import { StockinwardlistComponent } from './stock_management/stockinwardlist/stockinwardlist.component';
import { StockconsumeListComponent } from './stock_management/stockconsume-list/stockconsume-list.component';
import { StockconsumeFormComponent } from './stock_management/stockconsume-form/stockconsume-form.component';
import { StocktransferFormComponent } from './stock_management/stocktransfer-form/stocktransfer-form.component';
import { StocktransferListComponent } from './stock_management/stocktransfer-list/stocktransfer-list.component';
import { StockinwardformComponent } from './stock_management/stockinwardform/stockinwardform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MaterialmasterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    StagemasterComponent,
    AccountmainledgerComponent,
    AccountsubledgerComponent,
    MarketingmasterComponent,
    VendormasterComponent,
    BankmasterComponent,
    UsermasterComponent,
    VehiclemasterComponent,
    UnitmasterComponent,
    MarketingtypemasterComponent,
    SitelistComponent,
    SitemasterComponent,
    MaterialRequisitionlistComponent,
    MaterialRequisitionformComponent,
    StockOrderlistComponent,
    StockOrderformComponent,
    StockinwardlistComponent,
    StockconsumeListComponent,
    StockconsumeFormComponent,
    StocktransferFormComponent,
    StocktransferListComponent,
    StockinwardformComponent,
    TaskmanagementComponent,
    PlotReselllistComponent,
    PlotResellMComponent,
    MarketingManagementComponent,
    RegisterCustomer1Component,
    RegisteredCustomerComponent,
    VisitedCustomerComponent,
    StagetypemasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
