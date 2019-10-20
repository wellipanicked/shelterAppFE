import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownikDetailsComponent } from './pracownik-details.component';

describe('PracownikDetailsComponent', () => {
  let component: PracownikDetailsComponent;
  let fixture: ComponentFixture<PracownikDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownikDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownikDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
