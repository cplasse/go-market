import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ShoppingList } from '../../shared/models/shopping-list.model';

@Component({
  selector: 'shopping-lists-menu',
  templateUrl: './shopping-lists-menu.component.html',
  styleUrls: ['./shopping-lists-menu.component.scss']
})
export class ShoppingListsMenuComponent implements OnInit {

  @Input() lists: ShoppingList[];

  @Output() onNewListEvent: EventEmitter<any>;
  @Output() onSetCurrentListEvent: EventEmitter<ShoppingList>;

  constructor() { 
    this.onNewListEvent = new EventEmitter();
    this.onSetCurrentListEvent = new EventEmitter();
  }

  ngOnInit() {
  }

  onNewList() {
    this.onNewListEvent.emit();
  }

  onSetCurrentList(currentList: ShoppingList) {
    this.onSetCurrentListEvent.emit(currentList);
  }
}
