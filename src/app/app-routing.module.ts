import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'Users',
        pathMatch: 'full',
      },
      {
        path: 'Users',
        component: UsersComponent,
      },
      {
        path: 'Posts',
        component: PostsComponent,
      },
      {
        path: 'Comments',
        component: CommentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
