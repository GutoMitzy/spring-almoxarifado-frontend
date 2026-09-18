import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainInterface } from './main-interface';

describe('MainInterface', () => {
  let component: MainInterface;
  let fixture: ComponentFixture<MainInterface>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainInterface],
    }).compileComponents();

    fixture = TestBed.createComponent(MainInterface);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
