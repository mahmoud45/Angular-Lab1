import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/header/navbar.component';
import { HeroComponent } from './Components/Sections/hero/hero.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CategoryComponent } from './Components/Sections/category/category.component';
import { CategoryItemComponent } from './Components/Sections/category/category-item/category-item.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HeroComponent,
        FooterComponent,
        CategoryComponent,
        CategoryItemComponent,
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
