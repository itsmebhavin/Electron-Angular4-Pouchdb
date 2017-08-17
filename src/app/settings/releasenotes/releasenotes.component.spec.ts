import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasenotesComponent } from './releasenotes.component';

describe('ReleasenotesComponent', () => {
  let component: ReleasenotesComponent;
  let fixture: ComponentFixture<ReleasenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReleasenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleasenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
