import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadersComponent } from '../readers/readers.component';
import { SharedModule } from '../shared/shared.module';
import { ReaderRoutingModule } from './reader-routing.module';
import { ProductReaderComponent } from './product-reader/product-reader.component';
import { StudyReaderComponent } from './study-reader/study-reader.component';

@NgModule({
  declarations: [ReadersComponent, ProductReaderComponent, StudyReaderComponent],
  imports: [
    CommonModule, SharedModule,ReaderRoutingModule
  ]
})
export class ReadersModule { }
