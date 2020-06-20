import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailstraksPage } from './detailstraks.page';

const routes: Routes = [
  {
    path: '',
    component: DetailstraksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailstraksPageRoutingModule {}
