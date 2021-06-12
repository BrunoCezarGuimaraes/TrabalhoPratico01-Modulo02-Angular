import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelecaoComponent } from './app-selecao.component';

describe('AppSelecaoComponent', () => {
  let component: AppSelecaoComponent;
  let fixture: ComponentFixture<AppSelecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelecaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
