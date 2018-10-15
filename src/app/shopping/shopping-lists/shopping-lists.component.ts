import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/models/shopping-list.model';

@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  title: string;
  deleteAction: boolean

  lists: ShoppingList[];
  currentList: ShoppingList;

  constructor() {
    this.lists = [];
    this.deleteAction = false;
    this.onNewList();
  }

  ngOnInit() {
  }

  get() {

  }

  post(list: ShoppingList = null): number {
    if (list) {
      return this.lists.push(list);
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

  delete() {

  }

  onNewList(): ShoppingList {
    const size = this.post();
    return this.currentList = this.lists[size-1];
  }

  onSetCurrentList(list: ShoppingList): ShoppingList {
    return this.currentList = list;
  }

  onToogleDelete() {
    this.deleteAction = !this.deleteAction;
  }

  onDeleteList(list: ShoppingList = null): ShoppingList {
    if (!list) {
      list = this.currentList;
    }
    const index = this.lists.indexOf(list);
    if (index > -1) {
      this.lists.splice(index, 1);
    }
    if (!this.lists.length) {
      return this.onNewList();
    }
    return this.currentList = this.lists[0];
  }
}
