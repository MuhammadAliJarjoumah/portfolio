import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSectionSixComponent } from './feature-section-six.component';

describe('FeatureSectionSixComponent', () => {
  let component: FeatureSectionSixComponent;
  let fixture: ComponentFixture<FeatureSectionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureSectionSixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSectionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
