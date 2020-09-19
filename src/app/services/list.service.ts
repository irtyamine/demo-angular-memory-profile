import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

export class Item {
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private readonly http: HttpClient) {
  }

  getList(page: number = 1) {
    return this.http.get('https://reqres.in/api/users?page=' + page).pipe(delay(500), map((response: any) => response.data.map(i => {
      const newItem = new Item();
      newItem.email = i.email;
      return newItem;
    })));
  }
}
