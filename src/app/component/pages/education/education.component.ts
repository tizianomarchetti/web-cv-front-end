import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  show = {
    education: false,
    languages: false,
    courses: false
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  toggleShow(key: string) {
    this.appService.toggleShow(key, this.show);
  }

}
