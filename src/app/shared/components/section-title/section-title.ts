import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="mb-12">
      <div class="flex items-center gap-4 mb-3">
        <span class="font-mono text-sm" style="color: var(--color-accent)">{{ index() }}.</span>
        <h2 class="text-2xl md:text-3xl font-bold" style="color: var(--color-text)">{{ title() }}</h2>
        <div class="flex-1 h-px max-w-xs" style="background: var(--color-surface)"></div>
      </div>
      @if (subtitle()) {
        <p class="text-sm font-mono" style="color: var(--color-muted)">{{ subtitle() }}</p>
      }
    </div>
  `,
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>('');
  index = input<string>('01');
}
