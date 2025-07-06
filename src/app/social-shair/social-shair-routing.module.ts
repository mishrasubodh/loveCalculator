import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialShairPage } from './social-shair.page';

const routes: Routes = [
  {
    path: '',
    component: SocialShairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialShairPageRoutingModule {}
