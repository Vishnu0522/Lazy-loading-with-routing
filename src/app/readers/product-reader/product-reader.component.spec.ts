import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReaderComponent } from './product-reader.component';

describe('ProductReaderComponent', () => {
  let component: ProductReaderComponent;
  let fixture: ComponentFixture<ProductReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
