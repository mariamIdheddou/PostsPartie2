import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {PostService} from '../services/post.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] ;
  index: number;
  postSubsscription: Subscription;


  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postSubsscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

    this.postService.emitPostsSubject();
  }
  ngOnDestroy() {
    this.postSubsscription.unsubscribe();
  }


}
