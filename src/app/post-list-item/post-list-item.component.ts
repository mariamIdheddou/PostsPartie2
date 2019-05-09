import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../models/Post.model';
import {  Router } from '@angular/router';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input()  post: Post ;
  @Input()  index: number ;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }

  onlikeIt() {
  this.postService.likeIt(this.post);
  }

  onDontLike() {
    this.postService.DontLike(this.post);
  }
  onDeletePost(i: number) {
    this.postService.removePost(i);
  }
}
