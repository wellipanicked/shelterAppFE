import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyDokumentyComponent } from './pracownicy-dokumenty.component';

describe('PracownicyDokumentyComponent', () => {
  let component: PracownicyDokumentyComponent;
  let fixture: ComponentFixture<PracownicyDokumentyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownicyDokumentyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyDokumentyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
