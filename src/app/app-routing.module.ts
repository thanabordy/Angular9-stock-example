import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {
    path: 'stock', children:
      [
        { path: '', component: StockHomeComponent },
        { path: 'create', component: StockCreateComponent },
        { path: 'edit/:id', component: StockEditComponent },
      ]
  },
  { path: 'shop', component: ShopComponent },
  { path: '**', redirectTo: 'stock' },
  { path: '', redirectTo: 'stock', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
