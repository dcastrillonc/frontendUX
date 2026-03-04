import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface SidebarItem {
  label: string;
  iconSrc: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  readonly navItems: SidebarItem[] = [
    { label: 'Historial', iconSrc: '/assets/history.svg' },
    { label: 'Cuidador', iconSrc: '/assets/carer.svg' },
    { label: 'Progreso', iconSrc: '/assets/progress.svg' },
    { label: 'Asignación alarmas', iconSrc: '/assets/alarms.svg' }
  ];
}
