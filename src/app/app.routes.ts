import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: PostsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'details/:id', component: PhotoDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: AppComponent }
];
