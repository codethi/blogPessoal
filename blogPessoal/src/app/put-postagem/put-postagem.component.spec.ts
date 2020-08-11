import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PutPostagemComponent } from './put-postagem.component';

describe('PutPostagemComponent', () => {
  let component: PutPostagemComponent;
  let fixture: ComponentFixture<PutPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PutPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PutPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
