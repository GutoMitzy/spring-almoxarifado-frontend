import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemInfo } from './item-info';

describe('ItemInfo', () => {
  let component: ItemInfo;
  let fixture: ComponentFixture<ItemInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
