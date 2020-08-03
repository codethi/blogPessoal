import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilLateralComponent } from './perfil-lateral.component';

describe('PerfilLateralComponent', () => {
  let component: PerfilLateralComponent;
  let fixture: ComponentFixture<PerfilLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
