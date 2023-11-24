import { Component } from '@angular/core';
import { AppService } from './service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-cv-front-end';
  name: string;
  result: string;

  constructor(private appService: AppService) {}

  test() {
    ((this.name && this.name != '') ? this.appService.testWithName(this.name) : this.appService.test()).subscribe((res: string) => {
      this.result = res;
      this.name = '';
    })
  }
}
