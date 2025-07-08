import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlterComponent } from './ulter.component';

describe('UlterComponent', () => {
  let component: UlterComponent;
  let fixture: ComponentFixture<UlterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
