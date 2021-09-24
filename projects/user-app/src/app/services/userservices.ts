import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authorize } from 'core-library';

@Injectable({providedIn: 'root'})
export class HttpUserService {
  url: string;
  headers ={
    header: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  })
}
  constructor(public http: HttpClient) {
    this.url = "http://localhost:8080"
  }
  @Authorize()
  addUser(body: JSON) {
    return this.http.post(`${this.url + "/user"}`, body);
  }
}