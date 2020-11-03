import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelExpandComponent } from './travel-expand.component';

describe('TravelExpandComponent', () => {
  let component: TravelExpandComponent;
  let fixture: ComponentFixture<TravelExpandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelExpandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
