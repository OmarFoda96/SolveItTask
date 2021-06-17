import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Sort } from './sort';

@Directive({
  selector: '[sortable]',
})
export class NgbdSortableHeader {
  @Input() sortable: Array<any>;

  constructor(private targetElement: ElementRef) {}

  @HostListener('click')
  sortData() {
    const sort = new Sort();

    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute('data-order');

    const type = elem.getAttribute('data-type');

    const property = elem.getAttribute('data-name');

    if (order === 'desc') {
      this.sortable.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'asc');
    } else {
      this.sortable.sort(sort.startSort(property, order, type));
      elem.setAttribute('data-order', 'desc');
    }
  }
}
