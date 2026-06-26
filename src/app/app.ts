import { Component } from '@angular/core';
import { NavbarComponent } from './sections/navbar/navbar';
import { HeroComponent } from './sections/hero/hero';
import { AboutComponent } from './sections/about/about';
import { SkillsComponent } from './sections/skills/skills';
import { ProjectsComponent } from './sections/projects/projects';
import { ExperienceComponent } from './sections/experience/experience';
import { ContactComponent } from './sections/contact/contact';
import { FooterComponent } from './sections/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
