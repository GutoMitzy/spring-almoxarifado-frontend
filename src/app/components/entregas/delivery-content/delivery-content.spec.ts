import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryContent } from './delivery-content';

describe('ContentOverview', () => {
  let component: DeliveryContent;
  let fixture: ComponentFixture<DeliveryContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryContent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
