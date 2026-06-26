import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { ProjectCardComponent } from './project-card/project-card';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionTitleComponent, RevealDirective, ProjectCardComponent],
  template: `
    <section id="projects" class="section-container">
      <div appReveal>
        <app-section-title title="Projects" index="03" />
        <div class="projects-grid">
          @for (project of data.projects; track project.id) {
            <app-project-card [project]="project" />
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-container {
      padding: 6rem 1.5rem;
      max-width: 1280px;
      margin: 0 auto;
    }

    .projects-grid {
      display: grid;
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (min-width: 1280px) {
      .projects-grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  `],
})
export class ProjectsComponent {
  readonly data = PORTFOLIO_DATA;
}
