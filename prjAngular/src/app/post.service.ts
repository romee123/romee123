import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API
  constructor(private http: HttpClient) { }
  getPosts() :Observable<any>{
    return this.http.get(this.apiUrl);
  }
}
