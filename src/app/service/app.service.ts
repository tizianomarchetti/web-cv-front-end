import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactForm } from '../interface/contact-form';
import { of } from 'rxjs';

const root = "https://demo-adbr.onrender.com/";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  jsonUrl: string = '/assets/utils/{item}.json';
  
  constructor(private http: HttpClient) { }

  getJson(item: string) {
    return this.http.get(this.jsonUrl.replace('{item}', item))
  }

  toggleShow(key: string, show: any) {
    Object.keys(show).forEach(k => {
      if (k === key) {
        show[k] = !show[k];
      }
      else
        show[k] = false;
    })
  }

  sendMail(form: ContactForm) {
    return of(null);
  }
}
