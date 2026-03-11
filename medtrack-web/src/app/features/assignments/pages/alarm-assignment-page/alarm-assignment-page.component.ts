import { Component } from '@angular/core';
import { AppShellComponent } from '@core/layout/app-shell/app-shell.component';
import { AssignmentSelectionPanelComponent } from '@features/assignments/components/assignment-selection-panel/assignment-selection-panel.component';
import { AssignmentSelectionItem } from '@features/assignments/models/assignment-selection-item.model';
import { PrimaryActionButtonComponent } from '@shared/components/primary-action-button/primary-action-button.component';

@Component({
  selector: 'app-alarm-assignment-page',
  standalone: true,
  imports: [AppShellComponent, AssignmentSelectionPanelComponent, PrimaryActionButtonComponent],
  templateUrl: './alarm-assignment-page.component.html',
  styleUrl: './alarm-assignment-page.component.css'
})
export class AlarmAssignmentPageComponent {
  readonly patients: AssignmentSelectionItem[] = [
    { label: 'Paciente 1', selected: true },
    { label: 'Paciente 2' },
    { label: 'Paciente 3' },
    { label: 'Paciente 4' },
    { label: 'Paciente 5 (Deshabilitado)', disabled: true }
  ];

  readonly treatments: AssignmentSelectionItem[] = [
    { label: 'Tratamiento 1', selected: true },
    { label: 'Tratamiento 2' },
    { label: 'Tratamiento 3', selected: true },
    { label: 'Tratamiento 4', selected: true },
    { label: 'Tratamiento 5' }
  ];
}
