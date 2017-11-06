import { SkillsListComponent } from './skills-list/skills-list.component';
import { Page } from './../page/page.model';
import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { PageComponent } from './../page/page.component';


@Component({
  selector: 'app-skills',
  providers: [SkillsService],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private skills_list: Object[];
  private page: Object[];

  constructor(private skillsService: SkillsService) { }


  ngOnInit() {
    this.skillsService.getList()
      .subscribe(skills_list => this.skills_list = skills_list)
      // .subscribe(res => console.log(res))

    this.skillsService.getPage()
      .subscribe(page => this.page = page)
  }

}
