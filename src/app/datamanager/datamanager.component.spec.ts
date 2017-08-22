import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamanagerComponent } from './datamanager.component';

describe('DatamanagerComponent', () => {
  let component: DatamanagerComponent;
  let fixture: ComponentFixture<DatamanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
