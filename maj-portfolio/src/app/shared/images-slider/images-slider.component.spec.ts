import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesSliderComponent } from './images-slider.component';

describe('ImagesSliderComponent', () => {
  let component: ImagesSliderComponent;
  let fixture: ComponentFixture<ImagesSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
