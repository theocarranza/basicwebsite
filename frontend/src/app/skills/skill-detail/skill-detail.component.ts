import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

import { SkillsService } from 'app/skills/skills.service';

@Component({
  selector: 'app-skill-detail',
  providers: [SkillsService],
  templateUrl: './skill-detail.component.html',
  styleUrls: ['./skill-detail.component.css']
})

export class SkillDetailComponent implements OnInit, OnDestroy {
  public skill: Object[];
  public skill_id: number;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private skillsService: SkillsService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
      this.skill_id = params['skill_id']
    })

    this.skillsService.getSkill(this.skill_id)
      .subscribe(response => this.skill = response)
  }

  ngOnDestroy() { }
}
