import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardInfoComponent } from './components/card-info/card-info.component';

const routes: Routes = [
  {
    path: 'card-info',
    component: CardInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
