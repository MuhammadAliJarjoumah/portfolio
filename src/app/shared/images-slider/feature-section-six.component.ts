import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { FeatureSectionSix } from '../models/feature-section-six.model';

@Component({
  selector: 'feature-section-six',
  templateUrl: './feature-section-six.component.html',
  styleUrls: [ './feature-section-six.component.scss' ]
})
export class FeatureSectionSixComponent implements OnInit {
  @Input() sectionContent: FeatureSectionSix;
  translateX: number = 0;
  isFirstPart: boolean;
  isLastPart: boolean;
  currentIndex: number;
  isTabPortrait: boolean;
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
      "(max-width: 900px)"
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.isTabPortrait = true;
      } else {
        this.isTabPortrait = false;
      }
    });
    for (let slide of this.sectionContent.slides) {
      slide.isClicked = false;
    }
    this.onClickImage(0);
  }
  onClickNext() {
    if (this.currentIndex < (this.sectionContent.slides.length - 1)) {
      this.currentIndex++;
      this.onClickImage(this.currentIndex)
    }
  }

  onClickBack() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.onClickImage(this.currentIndex)
    }
  }


  onClickImage(index) {
    this.currentIndex = index;
    if (this.isTabPortrait) {
      this.translateX = (index) * -85;
    } else {
      this.translateX = (index) * -45;
    }
    for (let slide of this.sectionContent.slides) {
      slide.isClicked = false;
    }
    this.sectionContent.slides[ index ].isClicked = true;
    if (this.sectionContent.slides.length == 0 || this.sectionContent.slides.length == 1) {
      this.isFirstPart = true;
      this.isLastPart = true;
    }
    else if (index == 0) {
      this.isFirstPart = true;
      this.isLastPart = false;
    }
    else if (index == (this.sectionContent.slides.length - 1)) {
      this.isLastPart = true;
      this.isFirstPart = false;
    } else {
      this.isLastPart = false;
      this.isFirstPart = false;
    }
  }
}
