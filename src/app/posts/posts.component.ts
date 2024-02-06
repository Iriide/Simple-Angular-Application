import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsServiceService} from '../posts.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  providers: [PostsServiceService]
})
export class PostsComponent {
  service: PostsServiceService;

  constructor(service: PostsServiceService) {
    this.service = service;
  }

}
