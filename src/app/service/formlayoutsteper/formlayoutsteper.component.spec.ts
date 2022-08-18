import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlayoutsteperComponent } from './formlayoutsteper.component';

describe('FormlayoutsteperComponent', () => {
  let component: FormlayoutsteperComponent;
  let fixture: ComponentFixture<FormlayoutsteperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlayoutsteperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlayoutsteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
