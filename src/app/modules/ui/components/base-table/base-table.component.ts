import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {TableColumnConfig} from '../../../../types/ui/types';

@Component({
  selector: 'ui-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseTableComponent implements OnInit {
  @Input() columns: string[] = [];
  @Input() data: any[];
  @Input() config: {[key: string]: TableColumnConfig} = {};

  constructor() { }

  ngOnInit() {
  }

  /*
    column მნიშვნელობების შესაძლო ვარიანტები:
      'property',
      'property.subProperty',
      'property.subProperty.subProperty',
      ...
   */
  extractColumn(element: {[key: string]: any}, column: string): string | boolean {
    const splittedProps = column.split('.');
    let retValue: string | {} = element;
    for (const splittedProp of splittedProps) {
      if(retValue.hasOwnProperty(splittedProp)) {
        retValue = retValue[splittedProp];
      } else {
        retValue = '';
        break;
      }
    }
    return retValue as string;
  }

}
