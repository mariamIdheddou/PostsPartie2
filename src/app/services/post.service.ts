import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class PostService {

  constructor() {
    this.getPosts();
  }

  postsSubject = new Subject<Post[]>();

   posts: Post[] = [];

  emitPostsSubject() {
    this .postsSubject.next(this.posts.slice());
  }

  addPst(titre: string, content: string) {
    const post = new Post(titre, content);
    if ( this.posts.length === 0) {
      post.id = 1;
    } else {
      console.log('else');
      post.id = this.posts[(this.posts.length - 1)].id + 1;

    }
    this.posts.push(post);
    this.savePosts();
    this.emitPostsSubject();
  }
  removePost(i: number) {

      this.posts.splice(i, 1);
      this.savePosts();
      this.emitPostsSubject();

  }
  savePosts() {
    console.log(this.posts);
    firebase.database().ref('/posts').set(this.posts);
    console.log('apres');
    console.log(this.posts);
  }
  getPosts() {
    console.log('getposts');
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          console.log(this.posts);
          console.log('getposts');
          this.emitPostsSubject();
        }
      );
  }

  likeIt(post: Post) {
    post.loveIts++;
    this.savePosts();
  }

  DontLike(post: Post) {
      post.loveIts--;
      this.savePosts();
  }
}
