import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'sobre-theo-carranza',
    component: AboutMeComponent,
  },
  {
    path: 'theo-carranza-skills',
    component: SkillsComponent
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
