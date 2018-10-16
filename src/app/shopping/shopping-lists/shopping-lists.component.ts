import { Component, OnInit } from '@angular/core';
import { ShoppingList } from '../shared/models/shopping-list.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.component.html',
  styleUrls: ['./shopping-lists.component.scss']
})
export class ShoppingListsComponent implements OnInit {

  title: string;
  deleteAction: boolean;
  editAction: boolean;

  formLists: FormGroup;
  lists: ShoppingList[];
  currentList: ShoppingList;

  constructor(private fb: FormBuilder) {
    this.lists = [];
    this.deleteAction = false;
    this.editAction = false;
    this.onNewList();
  }

  ngOnInit() {
    this.formLists = new FormGroup(this.fb.group({
      name: [this.currentList.name, [
        Validators.maxLength(16),
        Validators.required
      ]],
      description: [this.currentList.description, [
        Validators.maxLength(24),
        Validators.required
      ]]
    }).controls, { updateOn: 'blur' });

    this.formLists.get('name').valueChanges.subscribe(
      (data) => {
        console.log(data);
      }
    )
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
    return this.currentList = this.lists[size - 1];
  }

  onSetCurrentList(list: ShoppingList): ShoppingList {
    return this.currentList = list;
  }

  onToogleDelete() {
    return this.deleteAction = !this.deleteAction;
  }

  onToogleEdit() {

    return this.editAction = !this.editAction;
  }

  onDeleteList(list: ShoppingList = null): ShoppingList {
    this.onToogleDelete();
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

  OnEditSubmit(): boolean {
    if (this.formLists.valid) {
      this.currentList.name = this.formLists.get('name').value;
      this.currentList.description = this.formLists.get('description').value;
      this.onToogleEdit();
      return true;
    }
    return false;
  }
}
