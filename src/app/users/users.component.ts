import { UsersInterface } from './../models/users.interface';
import { ResponseInterface } from './../models/response.interface';
import { BaseService } from './../services/base.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  dataLoaded: boolean = false;

  constructor(private service: BaseService, private router: Router) {}
  userSession: UsersInterface[] = JSON.parse(sessionStorage.getItem('users'));
  ngOnInit(): void {
    sessionStorage.removeItem('posts');
    sessionStorage.removeItem('comments');

    if (this.userSession) {
      this.users = this.userSession;
      this.collectionSize = +sessionStorage.getItem('userCollectionSize');
      this.pageSize = this.userSession.length;
      this.dataLoaded = true;
    } else {
      this.getAllUsers();
    }
  }

  users: UsersInterface[];
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  fullUsersArray: UsersInterface[];

  getAllUsers() {
    this.dataLoaded = false;
    this.service.getAllData('users').subscribe(
      (data: ResponseInterface) => {
        this.collectionSize = data.meta.pagination.total;
        this.dataLoaded = true;
        this.fullUsersArray = data.data;
        this.users = data.data
          .map((user, i) => ({ id: i + 1, ...user }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
      },
      (error) => {
        this.dataLoaded = true;
        this.router.navigate(['/Error']);
      }
    );
  }
  search(e) {
    if (e.target.value != '') {
      this.users = this.fullUsersArray.filter((element) => {
        return element.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      });
    } else {
      this.getAllUsers();
    }
  }

  userClicked(id) {
    localStorage.setItem('userId', id);
    this.router.navigate(['/Posts']);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    sessionStorage.setItem('users', JSON.stringify(this.users));
    sessionStorage.setItem('userCollectionSize', '' + this.collectionSize);
  }
}
