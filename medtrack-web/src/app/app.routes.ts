import { Routes } from '@angular/router';
import { MonthAlarmsPageComponent } from '@features/alarms/pages/month-alarms-page/month-alarms-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'alarmas'
  },
  {
    path: 'alarmas',
    component: MonthAlarmsPageComponent
  }
];
