import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyPathComponent } from './journey-path.component';

describe('JourneyPathComponent', () => {
  let component: JourneyPathComponent;
  let fixture: ComponentFixture<JourneyPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyPathComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JourneyPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
