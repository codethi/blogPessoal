import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutTemaComponent } from './put-tema.component';

describe('PutTemaComponent', () => {
  let component: PutTemaComponent;
  let fixture: ComponentFixture<PutTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
