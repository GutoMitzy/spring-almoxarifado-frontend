import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveriesCard } from './deliveries-card';

describe('DeliveriesCard', () => {
  let component: DeliveriesCard;
  let fixture: ComponentFixture<DeliveriesCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveriesCard],
    }).compileComponents();

    fixture = TestBed.createComponent(DeliveriesCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
