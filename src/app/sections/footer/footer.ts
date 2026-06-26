import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      Built with Angular + Tailwind &bull; Youssef Emad &copy; 2026
    </footer>
  `,
  styles: [`
    .footer {
      padding: 1.5rem;
      text-align: center;
      font-family: 'Inter', monospace;
      font-size: 0.75rem;
      color: var(--color-muted);
      border-top: 1px solid var(--color-surface);
    }
  `],
})
export class FooterComponent {}
