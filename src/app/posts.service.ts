import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  http: HttpClient;
  posts: Post[] = [];
  onImagesLoaded: EventEmitter<void> = new EventEmitter<void>();
  photos: Img[] = [];
  newPost: { userId: number; id: number; title: string; body: string; } = { userId: 0, id: 0, title: '', body: '' };

  constructor(http: HttpClient) {
    this.http = http;
    this.getPosts();
    this.getPhotos();
  }
  

  getPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.posts = response as Post[];
      });
  }
  getPhotos(): void {
    this.http.get<Img[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(response => {
        this.photos = response.slice(0, 20) as Img[];
        this.onImagesLoaded.emit();
      });
  }

  postPost(): void {
    const post = {
      userId: 1, 
      id : this.posts.length + 1,
      title: this.newPost.title,
      body: this.newPost.body
    };
    this.posts.push(post);
    this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post) 
    this.newPost.title = '';
    this.newPost.body = '';   
  }
  getPhotoById(id: number) {
    return this.http.get<Img>('https://jsonplaceholder.typicode.com/photos/' + id);
  }
 

}
export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export class Img {
  albumID: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(albumID: number, id: number, title: string, url: string, thumbnailUrl: string) {
    this.albumID = albumID;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }

  static empty() {
    return new Img(0, 0, '', '', '');
  }
}