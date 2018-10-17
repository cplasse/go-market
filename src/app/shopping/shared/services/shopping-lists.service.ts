import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shopping-list.model';
import { of, Observable } from 'rxjs';
import { ShoppingListsApiService } from './shopping-lists-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  lists: ShoppingList[];

  constructor(private shoppingListApiService: ShoppingListsApiService) {
    this.lists = [];
  }

  get(): Observable<ShoppingList[]> {
    return of(this.lists);
  }

  push(): Observable<ShoppingList[]> {
    this.shoppingListApiService.put(this.lists).subscribe();
    return this.get();
  }

  post(list: ShoppingList = null): Observable<ShoppingList> {
    if (list) {
      this.lists.push(list);
      return of(list);
    }
    list = {
      name: `List ${Date.now()}`,
      theme: 'test',
      description: `Shopping List ${Date.now()}`,
      products: []
    };
    return this.post(list);
  }

  put(lists: ShoppingList[]): Observable<ShoppingList[]> {
    while (this.lists.length) {
      this.lists.pop();
    }
    lists.forEach((list: ShoppingList) => {
      if (list) {
        this.post(list).subscribe();
      }
    }
    );
    return of(this.lists);
  }

  delete(list: ShoppingList): Observable<ShoppingList> {
    const index = this.lists.indexOf(list);
    if (index > -1) {
      this.lists.splice(index, 1);
    }
    return of(list)
  }
}
