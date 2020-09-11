import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  template: `
    <app-list></app-list>
  `,
  styles: [
  ]
})
export class FooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
