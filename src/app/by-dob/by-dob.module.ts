import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ByDobPageRoutingModule } from './by-dob-routing.module';

import { ByDobPage } from './by-dob.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ByDobPageRoutingModule,
    FormsModule
  ],
  declarations: [ByDobPage]
})
export class ByDobPageModule {}
