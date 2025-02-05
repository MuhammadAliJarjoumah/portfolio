import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesModalViewerComponent } from './images-modal-viewer.component';

describe('ImagesModalViewerComponent', () => {
  let component: ImagesModalViewerComponent;
  let fixture: ComponentFixture<ImagesModalViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesModalViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesModalViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
