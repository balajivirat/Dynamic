import { Component, OnInit } from '@angular/core';
import { GettingValueService } from './getting-value.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dinamic-order';
  mongoValue: any;
  values:any[] =[];
  data: any[] = [];

  constructor(public service: GettingValueService) {}

  ngOnInit() {
    this.service.getValue().subscribe((res => {
      this.mongoValue = res;
      this.values .push(this.mongoValue[3]);
      this.data.push(this.mongoValue[4]);
      console.log(this.data);
      console.log(this.values);

      
    }))
  }

}
