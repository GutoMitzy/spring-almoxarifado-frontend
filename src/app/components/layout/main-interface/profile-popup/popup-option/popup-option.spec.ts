import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupOption } from './popup-option';

describe('PopupOption', () => {
  let component: PopupOption;
  let fixture: ComponentFixture<PopupOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupOption],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupOption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
