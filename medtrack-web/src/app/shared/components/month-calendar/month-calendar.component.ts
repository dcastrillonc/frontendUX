import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CalendarDay } from '@shared/models/calendar-day.model';

@Component({
  selector: 'app-month-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './month-calendar.component.html',
  styleUrl: './month-calendar.component.scss'
})
export class MonthCalendarComponent {
  @Input({ required: true }) monthLabel!: string;
  @Input({ required: true }) weekDays!: string[];
  @Input({ required: true }) days!: CalendarDay[];

  trackByIndex(index: number): number {
    return index;
  }
}
