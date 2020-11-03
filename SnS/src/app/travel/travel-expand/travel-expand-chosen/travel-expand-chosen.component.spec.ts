import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExpandChosenComponent } from './travel-expand-chosen.component';

describe('TravelExpandChosenComponent', () => {
  let component: TravelExpandChosenComponent;
  let fixture: ComponentFixture<TravelExpandChosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelExpandChosenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExpandChosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
