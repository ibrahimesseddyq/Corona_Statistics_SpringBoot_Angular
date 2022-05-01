import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardemployerComponent } from './dashboardemployer.component';

describe('DashboardemployerComponent', () => {
  let component: DashboardemployerComponent;
  let fixture: ComponentFixture<DashboardemployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardemployerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardemployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
