import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTemaComponent } from './delete-tema.component';

describe('DeleteTemaComponent', () => {
  let component: DeleteTemaComponent;
  let fixture: ComponentFixture<DeleteTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
