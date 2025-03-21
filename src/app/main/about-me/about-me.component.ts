import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { IJourneyPath } from '../../shared/models/journey-path.interface';
import { IImageLayout } from '../../shared/models/image-layout.interface';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  standalone: false
})
export class AboutMeComponent implements OnInit {
  journeyPaths: IJourneyPath[];
  aspirations: IImageLayout[];
  constructor(private _MainService: MainService) { }

  ngOnInit() {
    this.getJourneyPath();
    this.getAspirations();
  }

  getJourneyPath() {
    this.journeyPaths = this._MainService.getJourneyPaths();
  }

  getAspirations(){
    this.aspirations = this._MainService.getAspirations();
  }
}
