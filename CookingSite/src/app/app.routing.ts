import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RecipesComponent } from './recipes/recipes.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { CreateRecipeComponent } from './create-recipe/create-recipecipe.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { FindRecipeComponent } from './find-recipe/find-recipe.component';
import { MeatRecipeComponent } from './categoryRecipe/meat-recipe/meat-recipe.component'
import { DairyRecipeComponent } from './categoryRecipe/dairy-recipe/dairy-recipe.component'
import { VegeablesRecipeComponent } from './categoryRecipe/vegeables-recipe/vegeables-recipe.component'
import { LegumesRecipeComponent } from './categoryRecipe/legumes-recipe/legumes-recipe.component'
import { DetailsRecipeComponent }  from './details-recipe/details-recipe.component'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipesComponent
  },
  {
    path: 'all-recipes',
    component: AllRecipeComponent
  },
  {
    path:'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'create-recipe',
    component: CreateRecipeComponent,
    canActivate:[ AuthGuard ]
  },
  {
    path:'find-recipe',
    component: FindRecipeComponent
  },
  {
    path:'find-recipe-meat',
    component:MeatRecipeComponent
  },
  {
    path:'find-recipe-dairy',
    component:DairyRecipeComponent
  },
  {
    path:'find-recipe-vegetables',
    component:VegeablesRecipeComponent
  },
  {
    path:'find-recipe-legumes',
    component:LegumesRecipeComponent
  },
  {
    path:'recipe-details/:id',
    component: DetailsRecipeComponent
  }


];


export const AppRoutingModule =  RouterModule.forRoot(routes)