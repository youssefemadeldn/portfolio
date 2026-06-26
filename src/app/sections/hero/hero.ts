import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconComponent } from '../../shared/components/icon/icon';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  template: `
    <section id="hero" class="hero-section">
      <div class="animate-fadeInUp hero-content">
        <p class="hero-pretext">Hi, my name is</p>
        <h1 class="hero-name">{{ data.personal.name }}.</h1>
        <h2 class="hero-title">{{ data.personal.title }}.</h2>
        <p class="hero-tagline">{{ data.personal.tagline }}</p>

        <div class="hero-ctas">
          <a href="#projects" (click)="scrollTo($event, 'projects')" class="btn-outline">
            View My Work
          </a>
          <a href="#contact" (click)="scrollTo($event, 'contact')" class="btn-outline">
            Contact Me
          </a>
        </div>

        <div class="hero-socials">
          @for (social of data.socials; track social.label) {
            <a
              [href]="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="social-icon"
              [attr.aria-label]="social.label"
            >
              <app-icon [name]="social.icon" />
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      max-width: 1280px;
      margin: 0 auto;
      padding-top: 64px;
    }

    .hero-content {
      max-width: 680px;
    }

    .hero-pretext {
      font-family: 'Inter', monospace;
      font-size: 1rem;
      color: var(--color-accent);
      margin-bottom: 1rem;
      margin-top: 0;
    }

    .hero-name {
      font-size: clamp(2.5rem, 8vw, 4.5rem);
      font-weight: 700;
      color: var(--color-text);
      line-height: 1.1;
      margin: 0 0 0.25rem 0;
    }

    .hero-title {
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 700;
      color: var(--color-muted);
      line-height: 1.1;
      margin: 0 0 1.5rem 0;
    }

    .hero-tagline {
      color: var(--color-muted);
      max-width: 520px;
      margin-bottom: 2.5rem;
      font-size: 1.0625rem;
      line-height: 1.7;
    }

    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 3rem;
    }

    .btn-outline {
      display: inline-block;
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      padding: 0.875rem 2rem;
      border-radius: 0.25rem;
      font-family: 'Inter', monospace;
      font-size: 0.875rem;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .btn-outline:hover {
      background-color: rgba(45, 212, 191, 0.1);
    }

    .hero-socials {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .social-icon {
      color: var(--color-muted);
      text-decoration: none;
      transition: color 0.2s ease, transform 0.2s ease;
      display: flex;
      align-items: center;
    }

    .social-icon:hover {
      color: var(--color-accent);
      transform: translateY(-2px);
    }
  `],
})
export class HeroComponent {
  private platformId = inject(PLATFORM_ID);
  readonly data = PORTFOLIO_DATA;

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
