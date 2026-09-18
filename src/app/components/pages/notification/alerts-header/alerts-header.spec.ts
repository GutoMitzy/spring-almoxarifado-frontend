import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertsHeader } from './alerts-header';

describe('AlertsHeader', () => {
  let component: AlertsHeader;
  let fixture: ComponentFixture<AlertsHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
