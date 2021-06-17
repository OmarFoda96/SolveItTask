import { UsersInterface } from './../models/users.interface';
import { PostsInterface } from './../models/posts.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseInterface } from '../models/response.interface';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  dataLoaded: boolean = false;

  constructor(private service: BaseService, private router: Router) {}

  ngOnInit(): void {
    this.getAllposts();
    this.getUserDetails();
  }

  posts: PostsInterface[];
  userId = localStorage.getItem('userId');
  user: UsersInterface;
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  fullpostsArray: PostsInterface[];
  getUserDetails() {
    this.service
      .getAllDataById(`users/${this.userId}`)
      .subscribe((data: any) => {
        this.user = data.data;
      });
  }
  getAllposts() {
    this.dataLoaded = false;
    this.service
      .getAllData(`users/${this.userId}/posts`)
      .subscribe((data: ResponseInterface) => {
        this.collectionSize = data.meta.pagination.total;
        this.dataLoaded = true;
        this.fullpostsArray = data.data;
        this.posts = data.data
          .map((user, i) => ({ id: i + 1, ...user }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
      });
  }

  postClicked(post) {
    localStorage.setItem('post', JSON.stringify(post));
    this.router.navigate(['/Comments']);
  }
}
