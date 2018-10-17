import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingList } from '../shared/models/shopping-list.model';
import { ShoppingListsService } from '../shared/services/shopping-lists.service';
import { ShoppingListsApiService } from '../shared/services/shopping-lists-api.service';

import { MatSnackBar } from '@angular/material/snack-bar';


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

  constructor(private shoppingListsService: ShoppingListsService,
    private shoppingListsServiceApi: ShoppingListsApiService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) {
    this.deleteAction = false;
    this.editAction = false;
  }

  ngOnInit() {
    this.shoppingListsServiceApi.get().subscribe(
      async (lists: ShoppingList[]) => {
        this.shoppingListsService.put(await lists).subscribe(
          (lists: ShoppingList[]) => {
            this.lists = lists;
            this.findCurrentList();
          }
        );
      },
      error => {
        const that = this;
        const ref = this.snackBar.open('Shopping lists not available', 'Retry', {
          duration: 3000
        });
        ref.onAction().subscribe(e => {
          this.ngOnInit.call(that);

        })
        console.log(error);
      }
    );
  }

  findCurrentList() {
    if (!this.lists.length) {
      this.onNewList();
    } else {
      const paramId = this.route.snapshot.paramMap.get("id");
      const currentList = this.lists.find((list: ShoppingList) => btoa(list.name) === paramId);
      this.currentList = currentList || this.lists[this.lists.length - 1];
      this.navigateToList(this.currentList);
    }
  }

  navigateToList(list: ShoppingList) {
    const paramId = this.route.snapshot.paramMap.get("id");
    const listId = btoa(list.name);
    if (paramId !== listId) {
      this.router.navigate([`lists/${listId}`]);
      return;
    }
  }

  onNewList(): void {
    if (this.editAction) {
      this.onToogleEdit();
    }
    this.shoppingListsService.post().subscribe(
      async (list: ShoppingList) => {
        this.currentList = await list;
        this.shoppingListsService.push().subscribe((lists: ShoppingList[]) => {
          this.navigateToList(this.currentList);
        });
      }
    );
  }

  onSetCurrentList(list: ShoppingList): ShoppingList {
    if (this.editAction) {
      this.onToogleEdit();
    }
    this.navigateToList(this.currentList = list);
    return this.currentList;
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
      (list: ShoppingList) => {
        this.shoppingListsService.push().subscribe((lists: ShoppingList[]) => {
          this.findCurrentList();
        });
      }
    )
  }
}
