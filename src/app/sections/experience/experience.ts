import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionTitleComponent, RevealDirective],
  template: `
    <section id="experience" class="section-container">
      <div appReveal>
        <app-section-title title="Experience" index="04" />

        <div class="timeline">
          <!-- Spine -->
          <div class="spine"></div>

          <div class="timeline-items">
            @for (item of data.experience; track item.company) {
              <div class="timeline-item">
                <!-- Dot -->
                <div class="dot"></div>

                <div class="item-header">
                  <div class="item-title-group">
                    <h3 class="item-role">{{ item.role }}</h3>
                    <p class="item-company">{{ item.company }}</p>
                  </div>
                  <div class="item-badges">
                    <span class="badge-period">{{ item.period }}</span>
                    <span class="badge-type">{{ item.type }}</span>
                  </div>
                </div>

                <ul class="highlights">
                  @for (point of item.highlights; track $index) {
                    <li class="highlight">
                      <span class="highlight-arrow">▹</span>
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-container {
      padding: 6rem 1.5rem;
      max-width: 56rem;
      margin: 0 auto;
    }

    .timeline {
      position: relative;
    }

    .spine {
      position: absolute;
      left: 1rem;
      top: 0;
      bottom: 0;
      width: 1px;
      background-color: var(--color-surface);
    }

    .timeline-items {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .timeline-item {
      padding-left: 3rem;
      position: relative;
    }

    .dot {
      position: absolute;
      left: 0.5625rem;
      top: 0.375rem;
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      background-color: var(--color-accent);
      border: 2px solid var(--color-bg);
    }

    .item-header {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .item-title-group {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .item-role {
      font-size: 1.0625rem;
      font-weight: 600;
      color: var(--color-text);
      margin: 0;
    }

    .item-company {
      font-family: 'Inter', monospace;
      font-size: 0.875rem;
      color: var(--color-accent);
      margin: 0;
    }

    .item-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .badge-period {
      font-family: 'Inter', monospace;
      font-size: 0.75rem;
      color: var(--color-muted);
      background-color: var(--color-surface);
      padding: 0.25rem 0.75rem;
      border-radius: 0.25rem;
    }

    .badge-type {
      font-family: 'Inter', monospace;
      font-size: 0.75rem;
      color: var(--color-accent);
      background-color: rgba(45, 212, 191, 0.08);
      border: 1px solid rgba(45, 212, 191, 0.2);
      padding: 0.25rem 0.75rem;
      border-radius: 0.25rem;
    }

    .highlights {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.625rem;
    }

    .highlight {
      display: flex;
      gap: 0.625rem;
      font-size: 0.875rem;
      color: var(--color-muted);
      line-height: 1.65;
    }

    .highlight-arrow {
      color: var(--color-accent);
      flex-shrink: 0;
      margin-top: 0.05em;
    }
  `],
})
export class ExperienceComponent {
  readonly data = PORTFOLIO_DATA;
}
