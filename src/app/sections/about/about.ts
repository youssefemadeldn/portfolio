import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, RevealDirective],
  template: `
    <section id="about" class="section-container">
      <div appReveal>
        <app-section-title title="About Me" index="01" />

        <div class="about-grid">
          <!-- Text -->
          <div class="about-text">
            <p>{{ data.personal.bio }}</p>
            <p>
              I'm particularly drawn to AI-powered startups — the intersection of mobile engineering
              and intelligent systems is where I see the most opportunity. I actively use AI tooling
              in my daily workflow (Claude Code, Cursor, ChatGPT) and treat it as a legitimate
              technical skill.
            </p>
            <p class="about-location">
              Currently based in
              <span class="accent">{{ data.personal.location }}</span>.
              Open to freelance and full-time Flutter roles.
            </p>
          </div>

          <!-- Photo placeholder -->
          <div class="about-photo-wrapper">
            <div class="about-photo-container">
              <div class="about-photo">
                <!-- TODO: replace with <img src="/assets/photo.webp" alt="Youssef Emad" class="about-photo-img"> -->
                <span class="about-initials">YE</span>
              </div>
              <div class="about-photo-decoration"></div>
            </div>
          </div>
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

    .about-grid {
      display: grid;
      gap: 3rem;
      align-items: start;
    }

    @media (min-width: 768px) {
      .about-grid {
        grid-template-columns: 3fr 2fr;
      }
    }

    .about-text {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: var(--color-muted);
      line-height: 1.75;
    }

    .about-text p {
      margin: 0;
    }

    .about-location {
      color: var(--color-text) !important;
    }

    .accent {
      color: var(--color-accent);
    }

    .about-photo-wrapper {
      display: flex;
      justify-content: center;
    }

    .about-photo-container {
      position: relative;
      width: 256px;
      height: 256px;
    }

    @media (min-width: 768px) {
      .about-photo-container {
        width: 288px;
        height: 288px;
      }
    }

    .about-photo {
      width: 100%;
      height: 100%;
      background-color: var(--color-surface);
      border: 2px solid rgba(45, 212, 191, 0.3);
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
    }

    .about-initials {
      font-family: 'Inter', monospace;
      font-size: 2rem;
      font-weight: 700;
      color: var(--color-accent);
      opacity: 0.6;
    }

    .about-photo-decoration {
      position: absolute;
      bottom: -12px;
      right: -12px;
      width: 100%;
      height: 100%;
      border: 2px solid var(--color-accent);
      border-radius: 0.25rem;
      z-index: 0;
      transition: transform 0.3s ease;
    }

    .about-photo-wrapper:hover .about-photo-decoration {
      transform: translate(-4px, -4px);
    }
  `],
})
export class AboutComponent {
  readonly data = PORTFOLIO_DATA;
}
