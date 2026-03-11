import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CaregiverItem } from '@features/caregivers/models/caregiver-item.model';

@Component({
  selector: 'app-caregiver-row',
  standalone: true,
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './caregiver-row.component.html',
  styleUrl: './caregiver-row.component.css'
})
export class CaregiverRowComponent {
  @Input({ required: true }) caregiver!: CaregiverItem;
}
