import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateCardsComponent } from './create-cards/create-cards.component';
import { GetCardsComponent } from './get-cards/get-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    CreateCardsComponent,
    GetCardsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
