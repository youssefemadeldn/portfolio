import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionTitleComponent, RevealDirective],
  template: `
    <section id="skills" class="section-container">
      <div appReveal>
        <app-section-title title="Skills" index="02" />

        <div class="skills-grid">
          @for (group of data.skills; track group.category) {
            <div class="skill-card">
              <h3 class="skill-category">{{ group.category }}</h3>
              <div class="chips">
                @for (skill of group.skills; track skill) {
                  <span class="chip">{{ skill }}</span>
                }
              </div>
            </div>
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

    .skills-grid {
      display: grid;
      gap: 1.5rem;
    }

    @media (min-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .skill-card {
      background-color: var(--color-surface);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: border-color 0.2s ease;
    }

    .skill-card:hover {
      border-color: rgba(45, 212, 191, 0.3);
    }

    .skill-category {
      font-family: 'Inter', monospace;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--color-text);
      margin: 0 0 1rem 0;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .chip {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      font-family: 'Inter', monospace;
      font-size: 0.8125rem;
      color: var(--color-accent);
      background-color: rgba(45, 212, 191, 0.08);
      border: 1px solid rgba(45, 212, 191, 0.2);
      border-radius: 9999px;
    }
  `],
})
export class SkillsComponent {
  readonly data = PORTFOLIO_DATA;
}
