import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    

  ]
})
export class PostsModule { }
