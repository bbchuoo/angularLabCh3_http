import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  ApiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private HttpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.HttpClient.get(this.ApiUrl + '/posts');
  }

  postPosts(): Observable<any> {
    return this.HttpClient.post(this.ApiUrl + '/posts',
      {
        "userId": 999,
        "id": 999,
        "title": "Angular test",
        "body": "Angular test"
      })
  }

  deletePosts(): Observable<any> {
    return this.HttpClient.delete(this.ApiUrl + '/posts/1');
  }
}
