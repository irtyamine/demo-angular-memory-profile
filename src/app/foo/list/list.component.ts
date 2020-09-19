import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  template: `<p></p>
  <button (click)="onPrev()" [disabled]="currentPage <= 1">Prev</button>&nbsp;
  <input type="number" name="inputTextInt" placeholder="Trang" [value]="currentPage" (input)="onInput($event.target)"
    style="width: 50px">
  <button (click)="onGo()" type="button" [disabled]="currentPage > 2 || currentPage < 1">Go</button>&nbsp;
  <button (click)="onNext()" [disabled]="currentPage > 1">Next</button>
      <ng-container *ngIf="items$ | async as items">
        <ul>
          <li *ngFor="let item of items">
            <app-list-item [item]="item"></app-list-item>
          </li>
        </ul>    
      </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {

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

  onGo() {
    this.items$ = this.listService.getList(this.currentPage);
  }

  ngOnDestroy(): void {
    console.log('list destroyed');
  }

  onInput(target: any) {
    if (!isNaN(Number(target.value))) {
      this.currentPage = Number(target.value);
    }
  }
}
