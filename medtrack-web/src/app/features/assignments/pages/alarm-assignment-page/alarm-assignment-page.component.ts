import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppShellComponent } from '@core/layout/app-shell/app-shell.component';
import { AssignmentSelectionPanelComponent } from '@features/assignments/components/assignment-selection-panel/assignment-selection-panel.component';
import { AssignmentSelectionItem } from '@features/assignments/models/assignment-selection-item.model';
import { PrimaryActionButtonComponent } from '@shared/components/primary-action-button/primary-action-button.component';

@Component({
  selector: 'app-alarm-assignment-page',
  standalone: true,
  imports: [CommonModule, AppShellComponent, AssignmentSelectionPanelComponent, PrimaryActionButtonComponent, RouterLink],
  templateUrl: './alarm-assignment-page.component.html',
  styleUrl: './alarm-assignment-page.component.css'
})
export class AlarmAssignmentPageComponent implements OnInit {
  title = 'Asignación de alarmas para Ana García';
  backRoute = '/cuidador';
  showSuccess = false;
  isFromAgregar = false;

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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['from'] === 'agregar') {
        this.isFromAgregar = true;
        this.title = 'Asignación de alarmas';
        this.backRoute = '/cuidador/agregar';
      } else if (params['name']) {
        this.title = `Asignación de alarmas para ${params['name']}`;
      }
    });
  }

  onAccept(): void {
    if (this.isFromAgregar) {
      this.router.navigate([this.backRoute]);
    } else {
      this.showSuccess = true;
    }
  }
}
