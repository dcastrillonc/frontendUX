import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppShellComponent } from '@core/layout/app-shell/app-shell.component';
import { CaregiverRowComponent } from '@features/caregivers/components/caregiver-row/caregiver-row.component';
import { CaregiverItem } from '@features/caregivers/models/caregiver-item.model';
import { PrimaryActionButtonComponent } from '@shared/components/primary-action-button/primary-action-button.component';

@Component({
  selector: 'app-caregiver-list-page',
  standalone: true,
  imports: [CommonModule, AppShellComponent, CaregiverRowComponent, PrimaryActionButtonComponent],
  templateUrl: './caregiver-list-page.component.html',
  styleUrl: './caregiver-list-page.component.css'
})
export class CaregiverListPageComponent {
  readonly activeCaregivers: CaregiverItem[] = [
    {
      name: 'Ana García',
      patientsLabel: '2 personas',
      statusLabel: '12/05/2023',
      initials: 'AG',
      avatarTone: 'sand',
      route: '/cuidador/ana-garcia'
    },
    {
      name: 'Carlos Ruíz',
      patientsLabel: '1 persona',
      statusLabel: '20/06/2023',
      initials: 'CR',
      avatarTone: 'amber'
    },
    {
      name: 'Elena Mora',
      patientsLabel: '3 personas',
      statusLabel: '05/08/2023',
      initials: 'EM',
      avatarTone: 'teal'
    }
  ];

  readonly pendingCaregivers: CaregiverItem[] = [
    {
      name: 'Marco Polo',
      patientsLabel: '0 personas',
      statusLabel: 'Pendiente por aceptación',
      initials: 'MP',
      avatarTone: 'slate',
      pending: true
    },
    {
      name: 'Lucía Sánz',
      patientsLabel: '0 personas',
      statusLabel: 'Pendiente por aceptación',
      initials: 'LS',
      avatarTone: 'rose',
      pending: true
    }
  ];
}
