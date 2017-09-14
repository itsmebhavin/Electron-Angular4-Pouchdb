import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormsComponent } from './product-forms.component';

describe('ProductFormsComponent', () => {
  let component: ProductFormsComponent;
  let fixture: ComponentFixture<ProductFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
