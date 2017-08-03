import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlmessagesComponent } from './controlmessages.component';

describe('ControlmessagesComponent', () => {
  let component: ControlmessagesComponent;
  let fixture: ComponentFixture<ControlmessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlmessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
