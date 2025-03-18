import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '../../shared/project-card/project-card.component';
import { ISocialAccount } from '../models/social-account.interface';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {
  skills: any[];
  myContacts: ISocialAccount[];
  projects: IProject[];

  constructor(private _MainService: MainService, private _Router: Router) {

  }
  ngOnInit(): void {
    this.getHomePageSections();
  }

  getHomePageSections() {
    this.skills = this._MainService.getSkills();
    this.myContacts = this._MainService.getMyAccounts();
    this.projects = this._MainService.getProjects();
  }

  onClickLink(route: string) {
    this._Router.navigate([route]);
  }
}
