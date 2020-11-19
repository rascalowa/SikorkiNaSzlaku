import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSubsComponent } from './travel-subs.component';

describe('TravelSubsComponent', () => {
  let component: TravelSubsComponent;
  let fixture: ComponentFixture<TravelSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
