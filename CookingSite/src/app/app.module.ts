import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { BlockCreateRecipeComponent } from './block-create-recipe/block-create-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipecipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';

import { AuthService } from './service/auth-service.service';
import { RecipesService } from './service/recipes.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BlockCreateRecipeComponent,
    RecipesComponent,
    CreateRecipeComponent,
    AllRecipeComponent,
    AboutUsComponent,
    RegisterComponent,
    LoginComponent,
    FindRecipeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule
  ],
  providers: [
    AuthService,
    RecipesService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
