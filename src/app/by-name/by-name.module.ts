import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByNamePageRoutingModule } from './by-name-routing.module';

import { ByNamePage } from './by-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByNamePageRoutingModule
  ],
  declarations: [ByNamePage]
})
export class ByNamePageModule {}
