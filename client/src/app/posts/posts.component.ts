import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Post } from './../types/post';
import { LoaderComponent } from './../shared/loader/loader.component';
import { RouterLink } from '@angular/router';
import { ElapsedPipe } from '../shared/pipes/elapsed.pipe';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [LoaderComponent, RouterLink, ElapsedPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe((posts) => {
      this.posts = posts;
      this.isLoading = false;
    });
  }
}
