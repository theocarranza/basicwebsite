import { SkillsService } from './../skills.service';
import { Component, OnInit } from '@angular/core';

import { Skills } from './../skills.model';

@Component({
  selector: 'app-skills-list',
  providers: [SkillsService],
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})

export class SkillsListComponent implements OnInit {
  public skills;

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    const p = this.skillsService.getList()
      .then((skills) => this.skills = skills)
  }

  printSkills(skills): void {
    for (const skill of skills) {
      console.log(skill)
    }
  }

}
