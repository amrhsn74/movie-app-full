// src/app/components/header/header.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>My Movie App</h1>
      <!-- Add navigation/menu here -->
    </header>
  `,
})
export class HeaderComponent {}
