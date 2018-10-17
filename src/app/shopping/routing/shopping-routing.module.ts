import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingComponent } from '../shopping.component';

const routes: Routes = [
  { path: 'lists', component: ShoppingComponent },
  { path: 'lists/:id', component: ShoppingComponent },
  { path: '**', redirectTo: 'lists'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
  ],
  exports: [RouterModule]
})
export class ShoppingRoutingModule { }
