import { PostsInterface } from './../models/posts.interface';
import { CommentInterface } from './../models/comment.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseInterface } from '../models/response.interface';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  dataLoaded: boolean = false;

  constructor(private service: BaseService, private router: Router) {}

  ngOnInit(): void {
    this.getAllcomments();
  }

  comments: CommentInterface[];
  userId = localStorage.getItem('userId');
  post: PostsInterface = JSON.parse(localStorage.getItem('post'));
  page = 1;
  pageSize = 5;
  collectionSize = 0;
  fullcommentsArray: CommentInterface[];
  getAllcomments() {
    this.dataLoaded = false;
    this.service
      .getAllData(`posts/${this.post.id}/comments`)
      .subscribe((data: ResponseInterface) => {
        this.collectionSize = data.meta.pagination.total;
        this.dataLoaded = true;
        this.fullcommentsArray = data.data;
        this.comments = data.data
          .map((user, i) => ({ id: i + 1, ...user }))
          .slice(
            (this.page - 1) * this.pageSize,
            (this.page - 1) * this.pageSize + this.pageSize
          );
      });
  }
}
