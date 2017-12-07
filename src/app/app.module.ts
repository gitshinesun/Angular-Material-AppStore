import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatMenuModule, MatButtonModule,
  MatExpansionModule, MatCardModule, MatProgressSpinnerModule, MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { StoreComponent } from './store/store.component';
import { Category1Component } from './category/category1/category1.component';
import { Category2Component } from './category/category2/category2.component';
import { Category3Component } from './category/category3/category3.component';
import { Category4Component } from './category/category4/category4.component';
import { SubcategorylistComponent } from './subcategorylist/subcategorylist.component';
import { LoadingComponent } from './loading/loading.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { ApppageComponent } from './apppage/apppage.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StoreComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    Category4Component,
    SubcategorylistComponent,
    LoadingComponent,
    SubcategoryComponent,
    ApppageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, MatIconModule, MatSidenavModule,
    MatMenuModule, MatButtonModule, MatExpansionModule,
    MatCardModule, MatProgressSpinnerModule, MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
