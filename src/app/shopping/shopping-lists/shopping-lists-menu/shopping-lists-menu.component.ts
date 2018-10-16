import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShoppingList } from '../../shared/models/shopping-list.model';
import { ShoppingListsService } from '../../shared/services/shopping-lists.service';

@Component({
  selector: 'shopping-lists-menu',
  templateUrl: './shopping-lists-menu.component.html',
  styleUrls: ['./shopping-lists-menu.component.scss']
})
export class ShoppingListsMenuComponent implements OnInit {

  @Output() onNewListEvent: EventEmitter<any>;
  @Output() onSetCurrentListEvent: EventEmitter<ShoppingList>;

  lists: ShoppingList[];

  constructor(private shoppingListsService: ShoppingListsService) {
    this.lists = [];
    this.onNewListEvent = new EventEmitter();
    this.onSetCurrentListEvent = new EventEmitter();
  }

  ngOnInit() {
    this.shoppingListsService.get().subscribe(
      async (lists: ShoppingList[]) => await(this.lists = lists)
    );
  }

  onNewList() {
    this.onNewListEvent.emit();
  }

  onSetCurrentList(currentList: ShoppingList) {
    this.onSetCurrentListEvent.emit(currentList);
  }
}
