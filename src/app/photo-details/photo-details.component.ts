import { Component, Input, OnInit } from '@angular/core';
import { PostsServiceService, Img } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './photo-details.component.html',
  styleUrl: './photo-details.component.css'
})
export class PhotoDetailsComponent implements OnInit {
  img: Img = Img.empty();
  showDetails: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private service: PostsServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? this.service.getPhotoById(Number(id)) : of(Img.empty());
      })
    ).subscribe(img => {
      this.img = img;
      this.showDetails = !!img;
    });
  }
}
