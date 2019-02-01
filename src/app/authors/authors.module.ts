import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAuthorComponent } from '../authors/product-author/product-author.component';
import { StudyAuthorComponent } from '../authors/study-author/study-author.component';
import { AuthorRoutingModule } from './author-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { AuthorsComponent } from './authors.component';

@NgModule({
  declarations: [ProductAuthorComponent, StudyAuthorComponent, AuthorsComponent],
  imports: [
    CommonModule, AuthorRoutingModule, SharedModule
  ],
  entryComponents: [NotFoundComponent]
})
export class AuthorsModule { }
