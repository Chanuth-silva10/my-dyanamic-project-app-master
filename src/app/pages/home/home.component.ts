import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  featuredPostArray!: Array<any>;
  latestPostArray!: Array<any>;

  constructor(private postService: PostsService) {

    this.postService.loadFeatured().subscribe((fval) => {
      this.featuredPostArray = fval;
    });

    this.postService.loadLatest().subscribe((lval) => {
      this.latestPostArray = lval;
    });

  }

  ngOnInit(): void {}
}
