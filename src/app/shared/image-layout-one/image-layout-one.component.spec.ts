import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLayoutOneComponent } from './image-layout-one.component';

describe('ImageLayoutOneComponent', () => {
  let component: ImageLayoutOneComponent;
  let fixture: ComponentFixture<ImageLayoutOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLayoutOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageLayoutOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
