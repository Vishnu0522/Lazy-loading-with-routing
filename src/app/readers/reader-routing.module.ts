import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReadersComponent } from './readers.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { ProductReaderComponent } from './product-reader/product-reader.component';
import { StudyReaderComponent } from './study-reader/study-reader.component';

const readerRoutes: Routes = [
  {
    path: 'product', component: ReadersComponent,
    children: [{ path: '', component: ProductReaderComponent }]
  },
  {
    path: 'study', component: ReadersComponent,
    children: [{ path: '', component: StudyReaderComponent }]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forChild(readerRoutes)
  ]
})
export class ReaderRoutingModule { }
