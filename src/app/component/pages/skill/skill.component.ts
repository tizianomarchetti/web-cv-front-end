import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  show = {
    backend: false,
    frontend: false,
    sql: false
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  toggleShow(key: string) {
    this.appService.toggleShow(key, this.show);
  }

}
