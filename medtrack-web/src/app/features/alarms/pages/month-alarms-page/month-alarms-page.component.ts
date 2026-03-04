import { Component } from '@angular/core';
import { AppShellComponent } from '@core/layout/app-shell/app-shell.component';
import { MonthCalendarComponent } from '@shared/components/month-calendar/month-calendar.component';
import { OutlinedActionButtonComponent } from '@shared/components/outlined-action-button/outlined-action-button.component';
import { CalendarDay } from '@shared/models/calendar-day.model';

@Component({
  selector: 'app-month-alarms-page',
  standalone: true,
  imports: [AppShellComponent, MonthCalendarComponent, OutlinedActionButtonComponent],
  templateUrl: './month-alarms-page.component.html',
  styleUrl: './month-alarms-page.component.scss'
})
export class MonthAlarmsPageComponent {
  readonly weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

  readonly monthDays: CalendarDay[] = [
    { value: 26, muted: true },
    { value: 27, muted: true },
    { value: 28, muted: true },
    { value: 29, muted: true },
    { value: 30, muted: true },
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5, hasAlarm: true },
    { value: 6 },
    { value: 7 },
    { value: 8 },
    { value: 9 },
    { value: 10 },
    { value: 11 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
    { value: 16 },
    { value: 17 },
    { value: 18, hasAlarm: true },
    { value: 19 },
    { value: 20, hasAlarm: true },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
    { value: 26 },
    { value: 27 },
    { value: 28 },
    { value: 29, hasAlarm: true },
    { value: 30 },
    { value: 31 },
    { value: 1, muted: true },
    { value: 2, muted: true },
    { value: 3, muted: true },
    { value: 4, muted: true },
    { value: 5, muted: true },
    { value: 6, muted: true }
  ];
}
