import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterItem } from './register-item';

describe('RegisterItem', () => {
  let component: RegisterItem;
  let fixture: ComponentFixture<RegisterItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
