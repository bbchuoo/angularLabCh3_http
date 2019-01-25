import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  ApiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(this.ApiUrl + '/posts');
  }

  postPosts(): Observable<any> {
    return this.httpClient.post(this.ApiUrl + '/posts',
      {
        'userId': 999,
        'id': 999,
        'title': 'Angular test',
        'body': 'Angular test'
      });
  }

  deletePosts(): Observable<any> {
    return this.httpClient.delete(this.ApiUrl + '/posts/1');
  }
}
