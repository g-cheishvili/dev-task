export interface TableColumnConfig {
  type: 'link' | 'routerLink' | 'boolean';
  mapper: (element: any) => string;
  label: string;
}
