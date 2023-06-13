import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AppBaseLayoutComponent } from './components/app-base-layout/app-base-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { FormsModule } from '@angular/forms';
import { RecipeTemplateComponent } from './components/recipes-page/recipe-template/recipe-template.component';
import { RecipePageComponent } from './components/recipes-page/recipe-page/recipe-page.component';
import { DescriptionComponent } from './shared/description/description.component';
import { ButtonComponent } from './shared/button/button.component';
import { IngredientsComponent } from './shared/ingredients/ingredients.component';
import { AddRecipeComponent } from './components/recipes-page/add-recipe/add-recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import {MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule } from '@angular/material/icon';
import { EditDirective, EditViewComponent, ViewDirective } from './shared/edit-view/edit-view.component';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { InputComponent } from './shared/input/input.component';
import { IconComponent } from './shared/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AppBaseLayoutComponent,
    NavbarComponent,
    SideMenuComponent,
    RecipesPageComponent,
    RecipeTemplateComponent,
    RecipePageComponent,
    DescriptionComponent,
    ButtonComponent,
    IngredientsComponent,
    AddRecipeComponent,
    NotificationsComponent,
    StarRatingComponent,
    EditViewComponent,
    ViewDirective,
    EditDirective,
    InputComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
