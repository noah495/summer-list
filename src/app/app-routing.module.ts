import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardsComponent } from './create-cards/create-cards.component';
import { GetCardsComponent } from './get-cards/get-cards.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: 'create-cards',
    component: CreateCardsComponent
  },
  {
    path: 'get-cards',
    component: GetCardsComponent
  },
  {
    path: 'overview',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
