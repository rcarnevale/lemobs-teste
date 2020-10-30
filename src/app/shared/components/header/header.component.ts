import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selectedRoute: string;
  public closedSidebar = false;

  constructor(
    private router: Router,

  ) {
   }

  ngOnInit(): void {
    
  }


  ////////////// ROTAS /////////////////

  isSelected(route: string): boolean{
    return this.selectedRoute == route? true:false;
  }

  navigateTo(route: string): void{
    this.selectedRoute = route;
    console.log(this.selectedRoute)
    this.router.navigate([route]);
  }

  /////////////////////////////////////

  ///////////// SIDEBAR ////////////////

  toggleSidebar(){
    console.log('toggle sidebar')
    this.closedSidebar = !this.closedSidebar;
  }
}
