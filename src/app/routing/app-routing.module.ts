import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsSearchComponent } from '../shopping/products-search/products-search.component';
import { ProductsListComponent } from '../shopping/products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    ProductsSearchComponent,
    ProductsListComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
