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

  public skills_list: Object[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit() {
    this.skillsService.getList()
    .subscribe(skills_list => this.skills_list = skills_list)
    // .subscribe(response => console.log(response))
   }

}
