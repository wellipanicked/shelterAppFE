import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownikCreateComponent } from './pracownik-create.component';

describe('PracownikCreateComponent', () => {
  let component: PracownikCreateComponent;
  let fixture: ComponentFixture<PracownikCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownikCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownikCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
