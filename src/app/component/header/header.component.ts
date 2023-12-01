import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LangItem } from 'src/app/interface/common/lang-item';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  languages: LangItem[];

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit() {
    this.appService.getJson('lang').subscribe((res: any) => {
      this.languages = res;
    })
  }

  changeLanguage(langId: string) {
    sessionStorage.setItem("lang", langId);
    this.translate.use(langId);
  }

}
