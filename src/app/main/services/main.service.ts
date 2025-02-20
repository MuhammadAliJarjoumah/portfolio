import { Injectable } from '@angular/core';
import Skills from '../jsons/skills.json';
import MyAccounts from '../jsons/my-accounts.json';
import { ISkill } from '../models/skill.interface';
import { ISocialAccount } from '../models/social-account.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  skills: ISkill[] = Skills;
  myAccounts: ISocialAccount[] = MyAccounts;

  constructor() { }

  getSkills() {
    return this.skills;
  }

  getMyAccounts() {
    return this.myAccounts;
  }
}
