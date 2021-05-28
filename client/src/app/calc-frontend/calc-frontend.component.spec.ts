import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFrontendComponent } from './calc-frontend.component';

describe('CalcFrontendComponent', () => {
  let component: CalcFrontendComponent;
  let fixture: ComponentFixture<CalcFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
