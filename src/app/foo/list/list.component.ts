import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  template: `
      <ng-container *ngIf="items$ | async as items">
        <ul>
          <li *ngFor="let item of items">
            <app-list-item [item]="item"></app-list-item>
          </li>
        </ul>    
      </ng-container>
      <button (click)="onPrev()" [disabled]="currentPage <= 1">Prev</button>
    <button (click)="onNext()" [disabled]="currentPage > 1">Next</button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  items$: Observable<any>;
  currentPage = 1;

  constructor(private readonly listService: ListService) {
  }

  ngOnInit(): void {
    this.items$ = this.listService.getList(this.currentPage);
  }

  onNext() {
    this.currentPage += 1;
    this.items$ = this.listService.getList(this.currentPage);
  }

  onPrev() {
    this.currentPage -= 1;
    this.items$ = this.listService.getList(this.currentPage);
  }
}
