

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SkillDetailComponent } from 'app/skills/skill-detail/skill-detail.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: 'sobre-theo-carranza',
    component: AboutMeComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'skill-detail/:skill_id',
    component: SkillDetailComponent
  },
  {
    path: 'skills-list',
    component: SkillsListComponent
  },
  {
    path: '',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
