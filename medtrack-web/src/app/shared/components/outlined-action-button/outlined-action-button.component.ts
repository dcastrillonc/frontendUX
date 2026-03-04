import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outlined-action-button',
  standalone: true,
  templateUrl: './outlined-action-button.component.html',
  styleUrl: './outlined-action-button.component.scss'
})
export class OutlinedActionButtonComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) icon!: string;
}
