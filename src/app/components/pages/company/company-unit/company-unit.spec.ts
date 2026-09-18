import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyUnit } from './company-unit';

describe('CompanyUnit', () => {
  let component: CompanyUnit;
  let fixture: ComponentFixture<CompanyUnit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyUnit],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyUnit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
