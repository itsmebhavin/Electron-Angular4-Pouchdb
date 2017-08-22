import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoticsComponent } from './diagnotics.component';

describe('DiagnoticsComponent', () => {
  let component: DiagnoticsComponent;
  let fixture: ComponentFixture<DiagnoticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
