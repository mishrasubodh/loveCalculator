import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ByDobPage } from './by-dob.page';

const routes: Routes = [
  {
    path: '',
    component: ByDobPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ByDobPageRoutingModule {}
