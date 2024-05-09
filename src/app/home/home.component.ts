import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isDropdownOpen:boolean = false;
  isDropdownOpen1:boolean = false;
  isCollapsed: boolean = false;
  isCollapsed1: boolean=false;
  isCollapsed2: boolean=false;
  isCollapsed3: boolean=false;
  isCollapsed4: boolean=false;
  isCollapsed5: boolean=false;
  subcollapse:boolean=false;
  constructor(private elementRef: ElementRef){

  }

  ngOnInit(): void{

  }

  mas:string='';
  customer:string='';
  hr:string='';
  stock:string='';
  accounting:string='';
  report:string='';
  estimate:string='';
  site:string='';
  task:string='';
  govt:string='';
  rofffice:string='';
  thirdparty:string='';
  marketingM:string='';
  dash:string='';
  mr:string='';
  mrc:string='';
  so:string='';
  soc:string='';
  si:string='';
  sic:string='';
  sc:string='';
  scc:string='';
  st:string='';
  stc:string='';
  empD:string='';
  empB:string='';
  salD:string='';
  salB:string='';

  currentDate=new Date();

  toggleSidebar(): void {
    document.body.classList.toggle('toggle-sidebar');
  }

  closedrop(){
    this.isDropdownOpen=false;
    this.isDropdownOpen1=false
  }

  SD(){
    this.empD='';
    this.empB='';
    this.mr='';
    this.mrc='';
    this.so='';
    this.soc='';
    this.si='';
    this.sic='';
    this.sc='';
    this.scc='';
    this.st='';
    this.stc='';
    this.salB='background-color:blue';
    this.salD='color:blue';
  }

  ED(){
    this.empD='color:blue';
    this.empB='background-color:blue';
    this.mr='';
    this.mrc='';
    this.so='';
    this.soc='';
    this.si='';
    this.sic='';
    this.sc='';
    this.scc='';
    this.st='';
    this.stc='';
    this.salB='';
    this.salD='';
  }


  MR(){
   this.mr='color:blue';
   this.mrc='background-color:blue';
   this.empB='';
   this.empD='';
   this.so='';
   this.soc='';
   this.si='';
   this.sic='';
   this.sc='';
   this.scc='';
   this.st='';
   this.stc='';
   this.salB='';
    this.salD='';
  }

  SO(){
   this.mr='';
   this.mrc='';
   this.empB='';
   this.empD='';
   this.so='color:blue';
   this.soc='background-color:blue'
   this.si='';
   this.sic='';
   this.sc='';
   this.scc='';
   this.st='';
   this.stc='';
   this.salB='';
    this.salD='';
  }

  SI(){
   this.mr='';
   this.mrc='';
   this.so='';
   this.soc='';
   this.empB='';
   this.empD='';
   this.si='color:blue';
   this.sic='background-color:blue';
   this.sc='';
   this.scc='';
   this.st='';
   this.stc='';
   this.salB='';
    this.salD='';
  }

  SC(){
    this.mr='';
    this.mrc='';
    this.so='';
    this.soc=''
    this.si='';
    this.sic='';
    this.empB='';
    this.empD='';
    this.sc='color:blue';
    this.scc='background-color:blue';
    this.st='';
    this.stc='';
    this.salB='';
    this.salD='';
  }

  ST(){
    this.mr='';
    this.mrc='';
    this.so='';
    this.soc=''
    this.si='';
    this.sic='';
    this.sc='';
    this.scc='';
    this.empB='';
    this.empD='';
    this.st='color:blue';
    this.stc='background-color:blue';
    this.salB='';
    this.salD='';
  }

  DashM(){
    this.dash='color:blue';
    this.estimate='';
      this.site='';
      this.task='';
      this.govt='';
      this.rofffice='';
      this.thirdparty='';
      this.marketingM='';
      this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  estimateM(){
   this.estimate='color:blue';
   this.dash='';
   this.site='';
   this.task='';
   this.govt='';
   this.rofffice='';
   this.thirdparty='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  siteM(){
   this.site='color:blue';
   this.dash='';
   this.estimate='';
   this.task='';
   this.govt='';
   this.rofffice='';
   this.thirdparty='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  taskM(){
   this.task='color:blue';
   this.dash='';
   this.site='';
   this.estimate='';
   this.govt='';
   this.rofffice='';
   this.thirdparty='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  govtOfficeM()
  {
   this.govt='color:blue';
   this.dash='';
   this.site='';
   this.task='';
   this.estimate='';
   this.rofffice='';
   this.thirdparty='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  RofficeM(){
    this.rofffice='color:blue';
    this.dash='';
    this.site='';
   this.task='';
   this.govt='';
   this.estimate='';
   this.thirdparty='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.salB='';
    this.salD='';
      this.empD='';
  }

  ThirdPartyM(){
this.thirdparty='color:blue';
this.dash='';
this.site='';
   this.task='';
   this.govt='';
   this.rofffice='';
   this.estimate='';
   this.marketingM='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  MarketingM(){
this.marketingM='color:blue';
this.dash='';
this.site='';
   this.task='';
   this.govt='';
   this.rofffice='';
   this.thirdparty='';
   this.estimate='';
   this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
      this.salB='';
    this.salD='';
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.isDropdownOpen1=false;
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  toggleDropdown1(event: Event): void {
    event.preventDefault();
    this.isDropdownOpen=false;
    this.isDropdownOpen1 = !this.isDropdownOpen1;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.mas='';
      this.isDropdownOpen = false;
    }
  }

  toggleCollapse(event: Event) {
    event.preventDefault();
    this.mas='color:blue;'
      this.dash='';
      this.estimate='';
      this.site='';
      this.task='';
      this.govt='';
      this.rofffice='';
      this.thirdparty='';
      this.marketingM='';
      this.customer='';
      this.hr='';
      this.stock='';
      this.accounting='';
      this.report='';
      this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
    this.isCollapsed1=false;
    this.isCollapsed2=false;
    this.isCollapsed3=false;
    this.isCollapsed4=false;
    this.isCollapsed5=false;
    this.isCollapsed = !this.isCollapsed;
  }

  toggleCollapse1(event: Event){
    event.preventDefault();
    this.mas='';
    this.dash='';
    this.estimate='';
    this.site='';
    this.task='';
    this.govt='';
    this.rofffice='';
    this.thirdparty='';
    this.marketingM='';
    this.customer='';
    this.hr='';
    this.stock='color:blue';
    this.accounting='';
    this.report='';
    this.empB='';
    this.empD='';
    this.salB='';
    this.salD='';
    this.isCollapsed=false;
    this.isCollapsed2=false;
    this.isCollapsed3=false;
    this.isCollapsed4=false;
    this.isCollapsed5=false;
    this.isCollapsed1=!this.isCollapsed1

  }

  toggleCollapse2(event:Event)
  {
    event.preventDefault();
    this.mas='';
    this.dash='';
    this.estimate='';
    this.site='';
    this.task='';
    this.govt='';
    this.rofffice='';
    this.thirdparty='';
    this.marketingM='';
    this.customer='color:blue';
    this.hr='';
    this.stock='';
    this.accounting='';
    this.report='';
    this.mr='';
    this.empB='';
    this.empD='';
    this.salB='';
    this.salD='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
    this.isCollapsed=false;
    this.isCollapsed1=false;
    this.isCollapsed3=false;
    this.isCollapsed4=false;
    this.isCollapsed5=false;
    this.isCollapsed2=!this.isCollapsed2

  }

  toggleCollapse3(event:Event)
  {
    this.isCollapsed=false;
    this.dash='';
    this.mas='';
    this.estimate='';
    this.site='';
    this.task='';
    this.govt='';
    this.rofffice='';
    this.thirdparty='';
    this.marketingM='';
    this.customer='';
    this.hr='color:blue';
    this.stock='';
    this.accounting='';
    this.report='';
    this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
    this.isCollapsed1=false;
    this.isCollapsed2=false;
    this.isCollapsed4=false;
    this.isCollapsed5=false;
    this.isCollapsed3=!this.isCollapsed3
  }

  toggleCollapse4(event:Event)
  {
    this.mas='';
    this.dash='';
    this.estimate='';
    this.site='';
    this.task='';
    this.govt='';
    this.rofffice='';
    this.thirdparty='';
    this.marketingM='';
    this.customer='';
    this.hr='';
    this.stock='';
    this.empB='';
    this.empD='';
    this.salB='';
    this.salD='';
    this.accounting='color:blue';
    this.report='';
    this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
    this.isCollapsed=false;
    this.isCollapsed1=false;
    this.isCollapsed2=false;
    this.isCollapsed3=false;
    this.isCollapsed5=false;
    this.isCollapsed4=!this.isCollapsed4
  }
  toggleCollapse5(event:Event)
  {
    this.mas='';
    this.dash='';
    this.estimate='';
    this.site='';
    this.task='';
    this.govt='';
    this.empB='';
    this.empD='';
    this.rofffice='';
    this.thirdparty='';
    this.marketingM='';
    this.customer='';
    this.hr='';
    this.stock='';
    this.accounting='';
    this.salB='';
    this.salD='';
    this.report='color:blue';
    this.mr='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
    this.isCollapsed=false;
    this.isCollapsed1=false;
    this.isCollapsed2=false;
    this.isCollapsed3=false;
    this.isCollapsed4=false;
    this.isCollapsed5=!this.isCollapsed5
  }
  AlltoggleCollapse()
  {
    this.mas='';
    this.customer='';
    this.hr='';
    this.stock='';
    this.accounting='';
    this.report='';
    this.isCollapsed=false;
    this.isCollapsed1=false;
    this.isCollapsed2=false;
    this.isCollapsed3=false;
    this.isCollapsed4=false;
    this.isCollapsed5=false;
    this.mr='';
    this.salB='';
    this.salD='';
      this.mrc='';
      this.so='';
      this.soc='';
      this.si='';
      this.sic='';
      this.sc='';
      this.scc='';
      this.st='';
      this.stc='';
      this.empB='';
      this.empD='';
  }

  subtoggle(event:Event)
  {
  this.subcollapse=!this.subcollapse
  }

}
