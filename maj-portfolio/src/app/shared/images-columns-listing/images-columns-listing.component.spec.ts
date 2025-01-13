import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesColumnsListingComponent } from './images-columns-listing.component';

describe('ImagesColumnsListingComponent', () => {
  let component: ImagesColumnsListingComponent;
  let fixture: ComponentFixture<ImagesColumnsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesColumnsListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesColumnsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
