import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISocialAccount } from '../models/social-account.interface';
import { MainService } from '../services/main.service';
import { IProject } from '../../shared/models/project.interface';

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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
