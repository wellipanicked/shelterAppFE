import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyHistoriaComponent } from './pracownicy-historia.component';

describe('PracownicyHistoriaComponent', () => {
  let component: PracownicyHistoriaComponent;
  let fixture: ComponentFixture<PracownicyHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownicyHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
