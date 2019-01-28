import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any;
  constructor(private appService: AppService) {
  }

  // 資源不會真正在服務器上創建
  getPosts() {
    this.appService.getPosts().subscribe(x => {
      this.posts = x;
    });
  }

  // 資源不會在服務器上真正更新
  postPosts() {
    this.appService.postPosts().subscribe(x => {
      this.posts = x;
    });
  }

  // 資源不會在服務器上真正刪除
  deletePosts() {
    this.appService.deletePosts().subscribe(x => {
      this.posts = x;
    });
  }

}
