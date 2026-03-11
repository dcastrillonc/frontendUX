import { Routes } from '@angular/router';
import { MonthAlarmsPageComponent } from '@features/alarms/pages/month-alarms-page/month-alarms-page.component';
import { AlarmAssignmentPageComponent } from '@features/assignments/pages/alarm-assignment-page/alarm-assignment-page.component';
import { AddCaregiverPageComponent } from '@features/caregivers/pages/add-caregiver-page/add-caregiver-page.component';
import { CaregiverListPageComponent } from '@features/caregivers/pages/caregiver-list-page/caregiver-list-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: MonthAlarmsPageComponent
  },
  {
    path: 'alarmas',
    redirectTo: 'home'
  },
  {
    path: 'cuidador',
    component: CaregiverListPageComponent
  },
  {
    path: 'cuidador/agregar',
    component: AddCaregiverPageComponent
  },
  {
    path: 'cuidador/asignar',
    component: AlarmAssignmentPageComponent
  }
];
