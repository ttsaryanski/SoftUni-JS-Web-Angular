import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';
import { Post } from './../types/post';
import { LoaderComponent } from './../shared/loader/loader.component';

@Component({
    selector: 'app-posts',
    standalone: true,
    imports: [LoaderComponent],
    templateUrl: './posts.component.html',
    styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    isLoading = true;
    
    constructor(private apiService: ApiService) {};

    ngOnInit(): void {
        this.apiService.getPosts(5).subscribe((posts) => {
            this.posts = posts;
            this.isLoading = false;
        })
    }
}
