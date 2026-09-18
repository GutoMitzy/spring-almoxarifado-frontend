import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GeneralStatistics } from './general-statistics';

describe('GeneralStatistics', () => {
  let component: GeneralStatistics;
  let fixture: ComponentFixture<GeneralStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralStatistics],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralStatistics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
