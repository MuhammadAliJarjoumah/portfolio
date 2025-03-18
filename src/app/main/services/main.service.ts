import { Injectable } from '@angular/core';
import Skills from '../jsons/skills.json';
import MyAccounts from '../jsons/my-accounts.json';
import { ISkill } from '../models/skill.interface';
import { ISocialAccount } from '../models/social-account.interface';
import { IProject } from '../../shared/project-card/project-card.component';
import Projects from '../jsons/projects-summary.json'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  skills: ISkill[] = Skills;
  myAccounts: ISocialAccount[] = MyAccounts;
  projects: IProject[] = Projects;

  constructor() { }

  getSkills() {
    return this.skills;
  }

  getMyAccounts() {
    return this.myAccounts;
  }

  getProjects(){
    return this.projects;
  }
}
