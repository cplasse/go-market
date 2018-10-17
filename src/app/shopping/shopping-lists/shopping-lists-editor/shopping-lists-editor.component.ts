import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ShoppingList } from '../../shared/models/shopping-list.model';
import { ShoppingListsService } from '../../shared/services/shopping-lists.service';

@Component({
  selector: 'shopping-lists-editor',
  templateUrl: './shopping-lists-editor.component.html',
  styleUrls: ['./shopping-lists-editor.component.scss']
})
export class ShoppingListsEditorComponent implements OnInit {

  formLists: FormGroup;

  @Input() currentList: ShoppingList;

  @Output() onToogleEditEvent: EventEmitter<any>;

  constructor(private fb: FormBuilder, private shoppingListService: ShoppingListsService) { 
    this.onToogleEditEvent = new EventEmitter();
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
    );
  }

  OnEditSubmit(): boolean {
    if (this.formLists.valid) {
      this.currentList.name = this.formLists.get('name').value;
      this.currentList.description = this.formLists.get('description').value;
      this.shoppingListService.push();
      this.onToogleEditEvent.emit();
      return true;
    }
    return false;
  }
}
