import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  template: `
    <p>
      {{item.email}}
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

}
