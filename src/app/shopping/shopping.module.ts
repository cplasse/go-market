import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingComponent } from './shopping.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListsMenuComponent } from './shopping-lists/shopping-lists-menu/shopping-lists-menu.component';
import { ShoppingListsEditorComponent } from './shopping-lists/shopping-lists-editor/shopping-lists-editor.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ShoppingComponent,
    ShoppingListsComponent,
    ProductsSearchComponent,
    ProductsListComponent,
    ShoppingListsMenuComponent,
    ShoppingListsEditorComponent,
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
