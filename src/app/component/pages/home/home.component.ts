import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/interface/common/contact';
import { MenuItem } from 'src/app/interface/common/menu-item';
import { AppService } from 'src/app/service/app.service';
import { saveAs } from 'file-saver';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];
  contacts: Contact[];

  constructor(private appService: AppService, private translate: TranslateService) { }

  ngOnInit() {
    forkJoin(this.appService.getJson('menu'), this.appService.getJson('contact'))
      .pipe(
        map(([menu, contact]) => {
          return {
            menu, contact
          }
        })
      ).subscribe((res: any) => {
        this.menuItems = res.menu;
        this.contacts = res.contact.filter(el => el.id === 'mail' || el.id === 'whatsapp' || el.id === 'residence');
      })
  }

  downloadCv() {
    let lang: string = this.translate.currentLang.toUpperCase();
    this.appService.downloadPdf(lang).subscribe(blob => saveAs(blob, 'CV Tiziano Marchetti_' + lang + '.pdf'));
  }

  openFile(lang: string) {
    this.appService.downloadPdf(lang).subscribe(blob => 
      {
        const url = window.URL.createObjectURL(blob);
        const fileLink = document.createElement("a");
        fileLink.href = url;
        fileLink.target = "_blank";
        document.body.appendChild(fileLink);
        fileLink.click();
        document.body.removeChild(fileLink);
      }
    );
  }

}
