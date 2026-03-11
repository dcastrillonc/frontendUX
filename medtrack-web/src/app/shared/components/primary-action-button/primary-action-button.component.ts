import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-action-button',
  standalone: true,
  templateUrl: './primary-action-button.component.html',
  styleUrl: './primary-action-button.component.css'
})
export class PrimaryActionButtonComponent {
  @Input({ required: true }) label!: string;
}
