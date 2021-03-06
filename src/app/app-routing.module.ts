import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from "./components/product/product/product.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProfileComponent} from "./components/authentication/profile/profile.component";
import {LoginComponent} from "./components/authentication/login/login.component";
import {RegistrationComponent} from "./components/authentication/registration/registration.component";
import {CartComponent} from "./components/cart/cart/cart.component";
import {StorageComponent} from "./components/storage/storage/storage.component";
import {RecipeComponent} from "./components/recipe/recipe/recipe.component";
import {RecipeDetailComponent} from "./components/recipe/recipe-detail/recipe-detail.component";
import {ProductDetailComponent} from "./components/product/product-detail/product-detail.component";

export enum AppRoute {
  DASHBOARD = 'dashboard',
  PROFILE = 'profile',
  LOGIN = 'login',
  REGISTRATION = 'registration',
  PRODUCT = 'product',
  PRODUCT_DETAIL = 'product-detail',
  CART = 'cart',
  STORAGE = 'storage',
  RECIPE = 'recipe',
  RECIPE_DETAIL = 'recipe-detail'
}

const routes: Routes = [
  {path: '', redirectTo: AppRoute.DASHBOARD, pathMatch: 'full'},
  {path: AppRoute.DASHBOARD, component: DashboardComponent},
  {path: AppRoute.PROFILE, component: ProfileComponent},
  {path: AppRoute.LOGIN, component: LoginComponent},
  {path: AppRoute.REGISTRATION, component: RegistrationComponent},
  {path: AppRoute.PRODUCT, component: ProductComponent},
  {path: AppRoute.PRODUCT_DETAIL, component: ProductDetailComponent},
  {path: AppRoute.PRODUCT_DETAIL + '/:id', component: ProductDetailComponent},
  {path: AppRoute.CART, component: CartComponent},
  {path: AppRoute.CART + '/:id', component: CartComponent},
  {path: AppRoute.STORAGE, component: StorageComponent},
  {path: AppRoute.STORAGE + '/:id', component: StorageComponent},
  {path: AppRoute.RECIPE, component: RecipeComponent},
  {path: AppRoute.RECIPE_DETAIL, component: RecipeDetailComponent},
  {path: AppRoute.RECIPE_DETAIL + '/:id', component: RecipeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
