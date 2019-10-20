import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyListComponent } from './pracownicy-list.component';

describe('PracownicyListComponent', () => {
  let component: PracownicyListComponent;
  let fixture: ComponentFixture<PracownicyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownicyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
