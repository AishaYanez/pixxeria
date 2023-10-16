import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/productsList/products-list/products-list.component';
import { HomeComponent } from './views/home/home/home.component';
import { AuthComponent } from './views/auth/auth/auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menu', component: ProductsListComponent},
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
