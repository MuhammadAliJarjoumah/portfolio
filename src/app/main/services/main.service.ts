import { Injectable } from '@angular/core';
import Skills from '../jsons/skills.json';
import MyAccounts from '../jsons/my-accounts.json';
import { ISkill } from '../models/skill.interface';
import { ISocialAccount } from '../models/social-account.interface';

import Projects from '../jsons/projects-summary.json'
import JourneyPaths from '../jsons/journey-paths.json'
import { IProject } from '../../shared/models/project.interface';
import { IJourneyPath } from '../../shared/models/journey-path.interface';
import { IImageLayout } from '../../shared/models/image-layout.interface';
import Aspirations from '../jsons/aspirations.json';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  skills: ISkill[] = Skills;
  myAccounts: ISocialAccount[] = MyAccounts;
  projects: IProject[] = Projects;
  journeyPaths: IJourneyPath[] = JourneyPaths;
  aspirations: IImageLayout[] = Aspirations
  constructor() { }

  getSkills() {
    return this.skills;
  }

  getMyAccounts() {
    return this.myAccounts;
  }

  getProjects() {
    return this.projects;
  }

  getJourneyPaths() {
    return this.journeyPaths;
  }

  getAspirations() {
    return this.aspirations
  }
}
