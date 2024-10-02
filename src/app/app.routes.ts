import { RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: 'add-product', component: SellerAddProductComponent },
  { path: 'dashboard', component: DashboardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
