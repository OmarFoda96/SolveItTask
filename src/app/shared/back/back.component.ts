import { UsersInterface } from './../../models/users.interface';
import { ResponseInterface } from './../../models/response.interface';
import { BaseService } from './../../services/base.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css'],
})
export class BackComponent implements OnInit {
  constructor(private service: BaseService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }
  userId = localStorage.getItem('userId');
  userDetails: UsersInterface;

  getUserDetails() {
    this.service
      .getAllDataById(`users/${this.userId}`)
      .subscribe((data: any) => {
        this.userDetails = data.data;
      });
  }
}
