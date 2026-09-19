import { TestBed } from '@angular/core/testing';
import { EntradaEstoqueService } from './entrada-estoque-service';

describe('EntradaEstoque', () => {
  let service: EntradaEstoqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntradaEstoqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
