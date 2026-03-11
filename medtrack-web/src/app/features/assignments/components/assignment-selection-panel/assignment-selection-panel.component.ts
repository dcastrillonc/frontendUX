import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AssignmentSelectionItem } from '@features/assignments/models/assignment-selection-item.model';

@Component({
  selector: 'app-assignment-selection-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-selection-panel.component.html',
  styleUrl: './assignment-selection-panel.component.css'
})
export class AssignmentSelectionPanelComponent {
  @Input({ required: true }) title!: string;
  @Input() placeholder = 'Search';
  @Input({ required: true }) items!: AssignmentSelectionItem[];
}
