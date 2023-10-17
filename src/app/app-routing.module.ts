import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home/home.component';
import { AuthComponent } from './views/auth/auth/auth.component';
import { ProductsMenuComponent } from './views/products-menu/products-menu/products-menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: ProductsMenuComponent},
  {path: 'login', component: AuthComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
