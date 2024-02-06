import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsServiceService } from '../posts.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-photos',
  standalone: true,
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  providers: [PostsServiceService]
})
export class PhotosComponent {
  service: PostsServiceService;

  constructor(service: PostsServiceService) {
    this.service = service;
  }
}
