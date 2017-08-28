import {Component, OnInit} from "@angular/core";
import {Post} from "../../model/post";
import {PostsService} from "../../services/posts/posts.service";
import {GeneralError} from "../../model/post-error";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  errorReason;

  constructor(private postsService: PostsService) {
  }

  setPosts(posts) {
    this.posts = posts;
    this.errorReason = null;
  }

  //Lifecycle hooks. Do some research
  ngOnInit() {
    this.postsService
      .getAllAsPromise()
      .then((postResponse: Post[]) => this.setPosts(postResponse))
      .catch(
        (error: GeneralError) => {
          this.errorReason = error.message;
        });
  }

  appendPost(post: Post) {
    this.posts.push(post);
  }

}
