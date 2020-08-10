import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTemaComponent } from './post-tema.component';

describe('PostTemaComponent', () => {
  let component: PostTemaComponent;
  let fixture: ComponentFixture<PostTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
