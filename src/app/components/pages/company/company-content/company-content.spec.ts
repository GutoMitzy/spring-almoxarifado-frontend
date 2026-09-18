import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyContent } from './company-content';

describe('CompanyContent', () => {
  let component: CompanyContent;
  let fixture: ComponentFixture<CompanyContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyContent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
