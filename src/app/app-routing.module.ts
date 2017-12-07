import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StoreComponent } from './store/store.component';
import { Category1Component } from './category/category1/category1.component';
import { Category2Component } from './category/category2/category2.component';
import { Category3Component } from './category/category3/category3.component';
import { Category4Component } from './category/category4/category4.component';
import { LoadingComponent } from './loading/loading.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { ApppageComponent } from './apppage/apppage.component';
import { SubcategorylistModule } from './subcategorylist/subcategorylist.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'loading', component: LoadingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'store', component: StoreComponent },
  { path: 'category1', component: Category1Component },
  { path: 'category2', component: Category2Component },
  { path: 'category3', component: Category3Component },
  { path: 'category4', component: Category4Component },
  { path: 'subcategory', component: SubcategoryComponent},
  { path: 'apppage', component: ApppageComponent},
  { path: 'subcategorylist', component: SubcategoryComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule,  ],
  declarations: []
})
export class AppRoutingModule { }
