import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WolontariuszeListComponent } from './wolontariusze-list.component';

describe('WolontariuszeListComponent', () => {
  let component: WolontariuszeListComponent;
  let fixture: ComponentFixture<WolontariuszeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WolontariuszeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WolontariuszeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
