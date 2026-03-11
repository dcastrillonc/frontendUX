import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-action-button',
  standalone: true,
  imports: [NgIf],
  templateUrl: './primary-action-button.component.html',
  styleUrl: './primary-action-button.component.css'
})
export class PrimaryActionButtonComponent {
  @Input({ required: true }) label!: string;
  @Input() iconSrc: string | null = 'cross.svg';
  @Input() compact = false;
}
