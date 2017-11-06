import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { PageComponent } from './page/page.component';
import { SkillDetailComponent } from './skills/skill-detail/skill-detail.component';
import { SkillsService } from './skills/skills.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    MenuComponent,
    SkillsComponent,
    SkillsListComponent,
    PageComponent,
    SkillDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
