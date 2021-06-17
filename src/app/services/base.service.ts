import { UsersInterface } from './../models/users.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}
  getAllData(urlName) {
    return this.http.get(`${this.baseUrl + urlName}`);
  }
  getAllDataById(urlName) {
    return this.http.get(`${this.baseUrl + urlName}`);
  }
  PostNewRecord(urlName, body) {
    return this.http.post(`${this.baseUrl + urlName}`, body);
  }
  UpdateRecord(urlName, body) {
    return this.http.get(`${this.baseUrl + urlName}`, body);
  }
  DeleteRecordById(urlName) {
    return this.http.get(`${this.baseUrl + urlName}`);
  }
}
