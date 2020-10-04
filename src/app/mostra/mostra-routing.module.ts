import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostraPage } from './mostra.page';

const routes: Routes = [
  {
    path: '',
    component: MostraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostraPageRoutingModule {}
