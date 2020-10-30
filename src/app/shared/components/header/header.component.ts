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
    this.selectedRoute = this.router.url
   }

  ngOnInit(): void {
    
  }

  isSelected(route: string): boolean{
    if(this.selectedRoute == '/' && route == '/home') return true;
    return this.selectedRoute == route? true:false;
  }

  navigateTo(route: string): void{
    this.router.navigate([route]);
  }




}
