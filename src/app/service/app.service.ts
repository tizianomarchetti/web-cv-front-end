import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  // test() {
  //   const url = root + "hello";
  //   return this.http.get(url, {responseType: "text"});
  // }

  // testWithName(name: string) {
  //   const url = root + "hello";
  //   let params = new HttpParams()
  //     .append("name", name)
  //   return this.http.get(url, {params: params, responseType: "text"});
  // }
}
