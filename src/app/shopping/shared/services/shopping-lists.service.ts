import { Injectable } from '@angular/core';
import { ShoppingList } from '../models/shopping-list.model';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListsService {

  lists: ShoppingList[];

  constructor() { 
    this.lists = [];
  }

  get(): Observable<ShoppingList[]> {
    return of(this.lists);
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

  put() {
  }

  delete(list: ShoppingList): Observable<ShoppingList> {
    const index = this.lists.indexOf(list);
    if (index > -1) {
      this.lists.splice(index, 1);
    }
    return of(list)
  }
}
