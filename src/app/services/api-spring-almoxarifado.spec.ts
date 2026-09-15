import { TestBed } from '@angular/core/testing';
import { ApiSpringAlmoxarifado } from './api-spring-almoxarifado';

describe('ApiSpringAlmoxarifado', () => {
  let service: ApiSpringAlmoxarifado;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSpringAlmoxarifado);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
