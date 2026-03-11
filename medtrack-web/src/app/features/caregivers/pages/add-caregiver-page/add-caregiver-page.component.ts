import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppShellComponent } from '@core/layout/app-shell/app-shell.component';
import { PrimaryActionButtonComponent } from '@shared/components/primary-action-button/primary-action-button.component';

@Component({
  selector: 'app-add-caregiver-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, AppShellComponent, PrimaryActionButtonComponent],
  templateUrl: './add-caregiver-page.component.html',
  styleUrl: './add-caregiver-page.component.css'
})
export class AddCaregiverPageComponent {
  email = '';
  message = '';
  termsAccepted = false;
  submitted = false;

  readonly patient = {
    name: 'Paciente 1',
    treatmentLabel: 'tratamiento asignado',
    avatarSrc: 'assets/avatar.svg'
  };

  onSubmit(): void {
    this.submitted = true;
  }
}
