import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/models/shopping-list.model';
import { ShoppingListsService } from '../shared/services/shopping-lists.service';

@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  title: string;
  deleteAction: boolean;
  editAction: boolean;

  lists: ShoppingList[];

  currentList: ShoppingList;

  constructor(private shoppingListsService: ShoppingListsService) {
    this.lists = [];
    this.deleteAction = false;
    this.editAction = false;
  }

  ngOnInit() {
    this.shoppingListsService.get().subscribe(
      async (lists: ShoppingList[]) => {
        await (this.lists = lists);
        if (!this.lists.length) {
          this.onNewList();
        }
      }
    );
  }

  onNewList(): void {
    if (this.editAction) {
      this.onToogleEdit();
    }
    this.shoppingListsService.post().subscribe(
      async (list: ShoppingList) => await (this.currentList = list)
    );
  }

  onSetCurrentList(list: ShoppingList): ShoppingList {
    if (this.editAction) {
      this.onToogleEdit();
    }
    return this.currentList = list;
  }

  onToogleDelete() {
    return this.deleteAction = !this.deleteAction;
  }

  onToogleEdit() {
    return this.editAction = !this.editAction;
  }

  onDeleteList(list: ShoppingList = null): void {
    this.onToogleDelete();
    if (!list) {
      list = this.currentList;
    }
    this.shoppingListsService.delete(list).subscribe(
      async (list: ShoppingList) => {
        !await this.lists.length
          ? this.onNewList()
          : this.currentList = this.lists[0];
      }
    )
  }
}
