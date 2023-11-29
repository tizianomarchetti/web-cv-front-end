import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interface/menu-item';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() menuItems: MenuItem[];
  @Input() activePage: string;

  constructor() { }

  ngOnInit() {
    this.setActiveMenuItem(this.menuItems.find(el => el.url === this.activePage || el.redirectUrl === this.activePage).id)
  }

  setActiveMenuItem(menuItem) {
    this.menuItems.forEach(item => {
      item.active = item.id === menuItem;
    })
  }

}
