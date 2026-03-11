import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface SidebarItem {
  label: string;
  iconSrc: string;
  route?: string;
  exact?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly navItems: SidebarItem[] = [
    { label: 'Home', iconSrc: '/assets/home.svg', route: '/home', exact: true },
    { label: 'Historial', iconSrc: '/assets/history.svg' },
    { label: 'Cuidador', iconSrc: '/assets/carer.svg', route: '/cuidador', exact: false },
    { label: 'Progreso', iconSrc: '/assets/progress.svg' },
    { label: 'Asignación alarmas', iconSrc: '/assets/alarms.svg' }
  ];
}
