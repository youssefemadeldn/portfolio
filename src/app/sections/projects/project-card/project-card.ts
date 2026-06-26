import { Component, computed, input, signal } from '@angular/core';
import { IconComponent } from '../../../shared/components/icon/icon';
import { Project } from '../../../core/data/portfolio.data';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [IconComponent],
  template: `
    <div class="card">
      <!-- Image carousel -->
      <div class="carousel-container">
        <div
          class="carousel-track"
          [style.transform]="'translateX(-' + currentIndex() * 100 + '%)'"
        >
          @for (img of project().images; track img.src) {
            <img
              [src]="'/assets/' + img.src"
              [alt]="img.alt"
              class="carousel-image"
              loading="lazy"
            />
          }
        </div>

        <!-- Prev / Next buttons -->
        @if (project().images.length > 1) {
          <button
            class="carousel-btn carousel-btn-left"
            (click)="prev()"
            aria-label="Previous image"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
            </svg>
          </button>
          <button
            class="carousel-btn carousel-btn-right"
            (click)="next()"
            aria-label="Next image"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
            </svg>
          </button>

          <!-- Dots -->
          <div class="carousel-dots">
            @for (img of project().images; track img.src; let i = $index) {
              <button
                class="carousel-dot"
                [class.active]="i === currentIndex()"
                (click)="goTo(i)"
                [attr.aria-label]="'Go to image ' + (i + 1)"
              ></button>
            }
          </div>
        }
      </div>

      <!-- Card body -->
      <div class="card-body">
        <div class="card-header">
          <h3 class="card-title">{{ project().shortTitle }}</h3>
          <span class="status-badge" [class]="statusClass()">
            {{ project().statusLabel }}
          </span>
        </div>

        <p class="card-type">{{ project().type }}</p>
        <p class="card-description">{{ project().description }}</p>

        <!-- Tech chips -->
        <div class="tech-chips">
          @for (tech of project().techStack; track tech) {
            <span class="tech-chip">{{ tech }}</span>
          }
        </div>

        <!-- Links -->
        <div class="card-links">
          @for (link of project().links; track link.url) {
            <a
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="card-link"
            >
              <app-icon name="external" />
              {{ link.label }}
            </a>
          }
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      display: flex;
      flex-direction: column;
      background-color: var(--color-surface);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 0.5rem;
      overflow: hidden;
      transition: border-color 0.3s ease, transform 0.3s ease;
      height: 100%;
    }

    .card:hover {
      border-color: rgba(45, 212, 191, 0.3);
      transform: translateY(-4px);
    }

    .carousel-container {
      position: relative;
      width: 100%;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      background-color: #0F1117;
    }

    .carousel-track {
      display: flex;
      transition: transform 0.35s ease;
      height: 100%;
    }

    .carousel-image {
      width: 100%;
      flex-shrink: 0;
      object-fit: contain;
      background-color: #0F1117;
      aspect-ratio: 16 / 9;
    }

    .carousel-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(15, 17, 23, 0.75);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--color-text);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease, color 0.2s ease;
      z-index: 2;
    }

    .carousel-btn:hover {
      background-color: rgba(45, 212, 191, 0.2);
      color: var(--color-accent);
    }

    .carousel-btn-left { left: 8px; }
    .carousel-btn-right { right: 8px; }

    .carousel-dots {
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 6px;
      z-index: 2;
    }

    .carousel-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: rgba(255, 255, 255, 0.3);
      border: none;
      cursor: pointer;
      padding: 0;
      transition: background-color 0.2s ease, transform 0.2s ease;
    }

    .carousel-dot.active {
      background-color: var(--color-accent);
      transform: scale(1.3);
    }

    .card-body {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      flex: 1;
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--color-text);
      margin: 0;
    }

    .status-badge {
      display: inline-block;
      padding: 0.2rem 0.6rem;
      font-family: 'Inter', monospace;
      font-size: 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .badge-live {
      background-color: rgba(34, 197, 94, 0.15);
      color: #4ade80;
      border-color: rgba(34, 197, 94, 0.3);
    }

    .badge-active {
      background-color: rgba(234, 179, 8, 0.15);
      color: #fbbf24;
      border-color: rgba(234, 179, 8, 0.3);
    }

    .badge-indev {
      background-color: rgba(59, 130, 246, 0.15);
      color: #60a5fa;
      border-color: rgba(59, 130, 246, 0.3);
    }

    .card-type {
      font-family: 'Inter', monospace;
      font-size: 0.75rem;
      color: var(--color-accent);
      margin: 0;
    }

    .card-description {
      font-size: 0.875rem;
      color: var(--color-muted);
      line-height: 1.65;
      margin: 0;
    }

    .tech-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    .tech-chip {
      font-family: 'Inter', monospace;
      font-size: 0.7rem;
      color: var(--color-muted);
      background-color: rgba(255, 255, 255, 0.04);
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
    }

    .card-links {
      display: flex;
      gap: 1rem;
      margin-top: auto;
      padding-top: 0.5rem;
    }

    .card-link {
      display: flex;
      align-items: center;
      gap: 0.375rem;
      font-family: 'Inter', monospace;
      font-size: 0.8125rem;
      color: var(--color-accent);
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .card-link:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  `],
})
export class ProjectCardComponent {
  project = input.required<Project>();
  currentIndex = signal(0);

  statusClass = computed(() => {
    const s = this.project().status;
    if (s === 'LIVE') return 'status-badge badge-live';
    if (s === 'Active') return 'status-badge badge-active';
    return 'status-badge badge-indev';
  });

  prev(): void {
    const total = this.project().images.length;
    this.currentIndex.update((i) => (i - 1 + total) % total);
  }

  next(): void {
    const total = this.project().images.length;
    this.currentIndex.update((i) => (i + 1) % total);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}
