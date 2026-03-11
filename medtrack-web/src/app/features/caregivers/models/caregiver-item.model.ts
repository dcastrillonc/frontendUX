export interface CaregiverItem {
  name: string;
  patientsLabel: string;
  statusLabel: string;
  initials: string;
  avatarTone: 'teal' | 'sand' | 'rose' | 'slate' | 'amber';
  pending?: boolean;
}
