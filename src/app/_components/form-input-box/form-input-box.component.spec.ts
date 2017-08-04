import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputBoxComponent } from './form-input-box.component';

describe('FormInputBoxComponent', () => {
  let component: FormInputBoxComponent;
  let fixture: ComponentFixture<FormInputBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInputBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
