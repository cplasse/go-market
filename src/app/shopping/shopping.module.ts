import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ShoppingRoutingModule } from './routing/shopping-routing.module';

import { ShoppingComponent } from './shopping.component';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ShoppingListsMenuComponent } from './shopping-lists/shopping-lists-menu/shopping-lists-menu.component';
import { ShoppingListsEditorComponent } from './shopping-lists/shopping-lists-editor/shopping-lists-editor.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShoppingRoutingModule
  ],
  declarations: [
    ShoppingComponent,
    ShoppingListsComponent,
    ShoppingListsMenuComponent,
    ShoppingListsEditorComponent,
  ],
  exports: [
  ]
})
export class ShoppingModule { }
