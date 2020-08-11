import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostagemComponent } from './delete-postagem.component';

describe('DeletePostagemComponent', () => {
  let component: DeletePostagemComponent;
  let fixture: ComponentFixture<DeletePostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
