import {ErrorHandler, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {PostsComponent} from "./components/posts/posts.component";
import {HttpModule} from "@angular/http";
import {PostComponent} from "./components/post/post.component";
import {NewPostComponent} from "./components/new-post/new-post.component";
import {FormsModule} from "@angular/forms";
import {PostsService} from "./services/posts/posts.service";
import {MyErrorHandler} from "./services/my-error-handler";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostsService,
    {
      provide: ErrorHandler,
      useClass: MyErrorHandler
    }],
  declarations: [PostsComponent, PostComponent, NewPostComponent],
  exports: [PostsComponent]
})
export class PostsModule {
}
