// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,       // ✅ standalone
  template: `
    <footer class="footer">
      <p>&copy; 2025 My Movie App</p>
    </footer>
  `,
})
export class FooterComponent {}
