import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigContent } from './config-content';

describe('ConfigContent', () => {
  let component: ConfigContent;
  let fixture: ComponentFixture<ConfigContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigContent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigContent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
