import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarComponent } from './bar.component';


const routes = [
  {path: '', component: BarComponent}
]
@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BarModule { }
