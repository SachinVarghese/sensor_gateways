import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  name: string;
  status: number;
  lastConnection: number;
  viewUrl: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: 1, name: 'Gateway 1', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 0, name: 'Gateway 2', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 0, name: 'Gateway 3', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 1, name: 'Gateway 4', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 1, name: 'Gateway 5', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensorsB'},
  {status: 1, name: 'Gateway 6', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 0, name: 'Gateway 7', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 1, name: 'Gateway 8', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 0, name: 'Gateway 9', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
  {status: 0, name: 'Gateway 10', lastConnection: 1545068962, viewUrl: '/<gatewayId>/sensors'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['STATUS', 'NAME', 'LAST CONNECTION', 'VIEW SENSORS'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
