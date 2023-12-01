import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {
  @Input() action: string;
  @Input() message: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}
