import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainViewComponent } from './main-view/main-view.component';
import { NavbarComponent } from './main-view/navbar/navbar.component';
import { BackComponent } from './shared/back/back.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NgbdSortableHeader } from './shared/sortable.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LineComponent } from './shared/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavbarComponent,
    BackComponent,
    LoaderComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    NgbdSortableHeader,
    LineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    NgbModule, // ToastrModule added
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
