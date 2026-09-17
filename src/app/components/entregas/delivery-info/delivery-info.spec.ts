import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryInfo } from './delivery-info';

describe('DeliveryInfo', () => {
  let component: DeliveryInfo;
  let fixture: ComponentFixture<DeliveryInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveryInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
