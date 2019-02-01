import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAuthorComponent } from './product-author/product-author.component';
import { StudyAuthorComponent } from './study-author/study-author.component';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { AuthorsComponent } from './authors.component';

const authorRoutes: Routes = [
  { path: '', component: AuthorsComponent },
  {
    path: 'product',
    component: AuthorsComponent,
    children: [
      { path: '', component: ProductAuthorComponent }
    ]
  },
  {
    path: 'study',
    component: AuthorsComponent,
    children: [
      { path: '', component: StudyAuthorComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(authorRoutes)
  ]
})
export class AuthorRoutingModule { }
