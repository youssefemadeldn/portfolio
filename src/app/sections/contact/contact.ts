import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { IconComponent } from '../../shared/components/icon/icon';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionTitleComponent, RevealDirective, IconComponent],
  template: `
    <section id="contact" class="section-container">
      <div appReveal class="contact-inner">
        <app-section-title title="Get In Touch" index="05" />

        <p class="contact-text">
          I'm currently open to new opportunities — freelance projects and full-time Flutter roles.
          Whether you have a project in mind or just want to say hello, my inbox is always open.
        </p>

        <a [href]="'mailto:' + data.personal.email" class="contact-cta">
          Say Hello
        </a>

        <div class="contact-socials">
          @for (social of data.socials; track social.label) {
            <a
              [href]="social.url"
              [target]="social.icon === 'email' ? '_self' : '_blank'"
              rel="noopener noreferrer"
              class="social-row"
            >
              <app-icon [name]="social.icon" />
              <span>{{ social.label }}</span>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section-container {
      padding: 6rem 1.5rem;
      max-width: 42rem;
      margin: 0 auto;
    }

    .contact-inner {
      text-align: center;
    }

    .contact-text {
      color: var(--color-muted);
      line-height: 1.75;
      margin-bottom: 2rem;
    }

    .contact-cta {
      display: inline-block;
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      padding: 0.875rem 2rem;
      border-radius: 0.25rem;
      font-family: 'Inter', monospace;
      font-size: 0.875rem;
      text-decoration: none;
      transition: background-color 0.2s ease;
      margin-bottom: 3rem;
    }

    .contact-cta:hover {
      background-color: rgba(45, 212, 191, 0.1);
    }

    .contact-socials {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .social-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: var(--color-muted);
      text-decoration: none;
      font-size: 0.9375rem;
      transition: color 0.2s ease;
    }

    .social-row:hover {
      color: var(--color-accent);
    }
  `],
})
export class ContactComponent {
  readonly data = PORTFOLIO_DATA;
}
