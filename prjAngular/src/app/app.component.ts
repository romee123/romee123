import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Angular';
  posts: any[] =[];
  constructor(private postservice: PostService){}

  ngOnInit(): void {
    this.postservice.getPosts().subscribe(response =>{
     this.posts =response;
    });
  }
  showJson:boolean= false;

  toggleJson(){
    this.showJson = !this.showJson;
  }

}
