import { UsersInterface } from './../../models/users.interface';
import { ResponseInterface } from './../../models/response.interface';
import { BaseService } from './../../services/base.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent implements OnInit {
  constructor(private service: BaseService, private _location: Location) {}
  userDetails: UsersInterface;
  ngOnInit(): void {
    this.userDetails = JSON.parse(localStorage.getItem('userModel'));
  }

  back() {
    this._location.back();
  }
}
