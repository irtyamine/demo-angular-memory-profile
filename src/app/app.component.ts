import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <a [routerLink]="['/']" routerLinkActive="router-link-active">Foo</a> &nbsp;&nbsp;
    <a [routerLink]="['/bar']" routerLinkActive="router-link-active">Bar</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'demo-angular-memory';
}
