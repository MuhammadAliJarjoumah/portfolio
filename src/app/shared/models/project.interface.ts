export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  // tags: string[];
  skills?: ISkills;
}

interface ISkills {
  technicalSkills: string[];
  hardSkills: string[];
  developmentPractices?: string[];
  analyticalAndProblemSolving?: string[];
}