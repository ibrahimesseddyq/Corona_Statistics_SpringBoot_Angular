import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteDisableComponent } from './compte-disable.component';

describe('CompteDisableComponent', () => {
  let component: CompteDisableComponent;
  let fixture: ComponentFixture<CompteDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteDisableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
