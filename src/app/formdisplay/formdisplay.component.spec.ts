import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdisplayComponent } from './formdisplay.component';

describe('FormdisplayComponent', () => {
  let component: FormdisplayComponent;
  let fixture: ComponentFixture<FormdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
