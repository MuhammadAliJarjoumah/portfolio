import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../shared/shared.module';
import { ISkill } from '../models/skill.interface';
import { ISocialAccount } from '../models/social-account.interface';
import { MainService } from '../services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {
  skills: any[];
  myContacts: ISocialAccount[];

  constructor(private _MainService: MainService, private _Router: Router) {

  }
  ngOnInit(): void {
    this.getHomePageSections();
  }

  getHomePageSections() {
    this.skills = this._MainService.getSkills();
    this.myContacts = this._MainService.getMyAccounts();
  }

  onClickLink(route: string) {
    this._Router.navigate([route]);
  }
}
