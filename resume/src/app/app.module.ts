import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { CodingProficiencyComponent } from './coding-proficiency/coding-proficiency.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ContactInfoComponent,
    IntroductionComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    CodingProficiencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
