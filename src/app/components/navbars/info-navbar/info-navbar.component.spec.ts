import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNavbarComponent } from './info-navbar.component';

describe('InfoNavbarComponent', () => {
  let component: InfoNavbarComponent;
  let fixture: ComponentFixture<InfoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
