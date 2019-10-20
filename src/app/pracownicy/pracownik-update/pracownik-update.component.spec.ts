import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownikUpdateComponent } from './pracownik-update.component';

describe('PracownikUpdateComponent', () => {
  let component: PracownikUpdateComponent;
  let fixture: ComponentFixture<PracownikUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownikUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownikUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
