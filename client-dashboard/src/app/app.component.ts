import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor(
    private router: Router,
    private location: Location
  ) {
  }


  ngOnInit() {
    this.router.events.subscribe(event => {
      console.log(this.location.path());
      if (this.location.path().includes("dashboard")) {
        this.selectedMenu = "dashboard";
      } else {
        this.selectedMenu = "sensors";
      }
    });
  }

  selectedMenu = "dashboard";
  menuItems = [
    { name: 'Home', icon:'home',link:'/',base:"dashboard" },
    { name: 'Dashboard',icon:'bar_chart',link:'/dashboard',base:"dashboard" },
    { name: 'Map', icon:'map',link:'/',base:"dashboard" },
    { name: 'Home', icon:'home',link:'/',base:"sensors" },
    { name: 'Sensors', icon:'trending_up',link:'',base:"sensors" }
  ];
}
