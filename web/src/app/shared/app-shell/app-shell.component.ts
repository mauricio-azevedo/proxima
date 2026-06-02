import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-shell',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.scss',
})
export class AppShellComponent {
  @Input({ required: true }) title = '';
  @Input() eyebrow = 'Próxima';
  @Input() subtitle = '';
  @Input() actionLabel = '';
  @Input() showBackLink = false;

  @Output() readonly primaryActionRequested = new EventEmitter<void>();
  @Output() readonly logoutRequested = new EventEmitter<void>();
}
