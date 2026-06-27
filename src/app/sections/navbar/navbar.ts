import { Component, HostListener, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

interface NavLink {
  id: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  styleUrl: './navbar.css',
  template: `
    <nav [class.scrolled]="isScrolled()" class="navbar">
      <div class="navbar-inner">
        <!-- Logo -->
        <a href="#hero" (click)="scrollTo($event, 'hero')" class="navbar-logo">YE</a>

        <!-- Desktop nav -->
        <ul class="navbar-links">
          @for (link of navLinks; track link.id; let i = $index) {
            <li>
              <a
                [href]="'#' + link.id"
                (click)="scrollTo($event, link.id)"
                class="nav-link"
              >
                <span class="nav-index">{{ formatIndex(i + 1) }}.</span>
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <!-- Resume CTA -->
        <a
          href="https://drive.google.com/uc?export=download&id=1-mTTF9glNxVQYjeork38iXqIi_biSxpE"
          target="_blank"
          rel="noopener noreferrer"
          class="navbar-resume hidden md:block"
        >Resume</a>

        <!-- Hamburger -->
        <button class="hamburger md:hidden" (click)="toggleMenu()" aria-label="Toggle menu">
          <span class="hamburger-line" [class.open-1]="isMenuOpen()"></span>
          <span class="hamburger-line" [class.open-2]="isMenuOpen()"></span>
          <span class="hamburger-line" [class.open-3]="isMenuOpen()"></span>
        </button>
      </div>

      <!-- Mobile menu -->
      @if (isMenuOpen()) {
        <div class="mobile-menu">
          <ul class="mobile-links">
            @for (link of navLinks; track link.id; let i = $index) {
              <li>
                <a
                  [href]="'#' + link.id"
                  (click)="scrollTo($event, link.id)"
                  class="mobile-link"
                >
                  <span class="nav-index">{{ formatIndex(i + 1) }}.</span>
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
          <a
            href="https://drive.google.com/uc?export=download&id=1-mTTF9glNxVQYjeork38iXqIi_biSxpE"
            target="_blank"
            rel="noopener noreferrer"
            class="navbar-resume mt-6 self-start"
          >Resume</a>
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  private platformId = inject(PLATFORM_ID);

  isScrolled = signal(false);
  isMenuOpen = signal(false);

  readonly navLinks: NavLink[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isScrolled.set(window.scrollY > 50);
  }

  scrollTo(event: Event, id: string): void {
    event.preventDefault();
    this.isMenuOpen.set(false);
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.isMenuOpen.update((v) => !v);
  }

  formatIndex(n: number): string {
    return n < 10 ? '0' + n : String(n);
  }
}
