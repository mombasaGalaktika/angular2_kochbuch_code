import { Component } from '@angular/core';
import { DataService } from './data.service';

interface Data {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <button (click)="getData()">Get Data</button>
    <button (click)="sendData()">Send Data</button>
    <ul>
      <li *ngFor="let d of data">ID: {{d.id}} Name: {{d.name}}</li>
    </ul>
  `
})
export class AppComponent {
  dataService: DataService;
  data: Array<Data>;

  constructor(dataService: DataService) {
    this.dataService = dataService;
    this.data = [];
  }

  getData() {
    this.dataService.getData()
        .subscribe((data) => {
          this.data = data;
        });
  }

  sendData() {
    const name = 'New Name';
    this.dataService.sendData(name)
        .subscribe((data) => {
          this.data.push(data);
        });
  }
}


