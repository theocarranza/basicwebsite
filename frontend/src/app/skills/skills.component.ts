import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  providers: [SkillsService],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Object[];

  constructor(private skillsService: SkillsService) {
  }

  ngOnInit() {
    this.skillsService.getList()
      .then(skills => this.skills = skills)

  }

}
