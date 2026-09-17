import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationContent } from './notification-content';

describe('ContentOverview', () => {
  let component: NotificationContent;
  let fixture: ComponentFixture<NotificationContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationContent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
