import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureInputComponent } from './figure-input.component';

describe('FigureInputComponent', () => {
  let component: FigureInputComponent;
  let fixture: ComponentFixture<FigureInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
