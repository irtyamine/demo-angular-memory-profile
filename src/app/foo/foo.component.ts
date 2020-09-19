import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <app-list></app-list>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
  }

}
