import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroisListagemComponent } from './herois-listagem.component';

describe('HeroisListagemComponent', () => {
  let component: HeroisListagemComponent;
  let fixture: ComponentFixture<HeroisListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroisListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroisListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
