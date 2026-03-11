import { Component, Input } from '@angular/core';
import { SidebarComponent } from '@core/layout/sidebar/sidebar.component';
import { TopbarComponent } from '@core/layout/topbar/topbar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [SidebarComponent, TopbarComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css'
})
export class AppShellComponent {
  @Input({ required: true }) title!: string;
  @Input() leadingIcon?: string;
  @Input() titleRoute?: string;
}
