import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeInputComponent } from './shape-input.component';

describe('ShapeInputComponent', () => {
  let component: ShapeInputComponent;
  let fixture: ComponentFixture<ShapeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
