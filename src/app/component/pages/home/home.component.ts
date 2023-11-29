import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from 'src/app/interface/contact';
import { MenuItem } from 'src/app/interface/menu-item';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];
  contacts: Contact[];

  constructor(private appService: AppService) { }

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

}
