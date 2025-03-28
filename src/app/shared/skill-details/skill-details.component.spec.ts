import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDetailsComponent } from './skill-details.component';

describe('SkillDetailsComponent', () => {
  let component: SkillDetailsComponent;
  let fixture: ComponentFixture<SkillDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
