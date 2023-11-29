import { Component } from '@angular/core';
import { AppService } from './service/app.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from './interface/menu-item';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  result: string;

  activePage: string;
  menuItems: MenuItem[];

  constructor(private appService: AppService, private translate: TranslateService,
    private router: Router) {
    translate.setDefaultLang("it");
    translate.use(sessionStorage.getItem("lang") || "it");

    forkJoin(appService.getJson('menu'), appService.getJson('lang'))
      .pipe(
        map(([menu, lang]) => {
          return {
            menu,
            lang
          }
        })
      )
      .subscribe((res: any) => {
        this.menuItems = res.menu;
      });

    /** per mantenere la classe css active sulla voce attiva di menu anche dopo refresh */
    router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.activePage = e.url;
      }
    });
  }

  // test() {
  //   ((this.name && this.name != '') ? this.appService.testWithName(this.name) : this.appService.test()).subscribe((res: string) => {
  //     this.result = res;
  //     this.name = '';
  //   })
  // }
}
