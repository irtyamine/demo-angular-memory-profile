import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';

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
export class ListItemComponent implements OnInit, OnDestroy {
  @Input() item: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    console.log('list item destroyed', this.item.email);
  }

}
