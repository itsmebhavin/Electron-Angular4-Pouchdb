import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworknotifierComponent } from './networknotifier.component';

describe('NetworknotifierComponent', () => {
  let component: NetworknotifierComponent;
  let fixture: ComponentFixture<NetworknotifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetworknotifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetworknotifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
