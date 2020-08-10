import { TestBed } from '@angular/core/testing';

import { PostagemService } from './postagem.service';

describe('PostagemService', () => {
  let service: PostagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
