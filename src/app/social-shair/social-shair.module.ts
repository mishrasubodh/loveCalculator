import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SocialShairPageRoutingModule } from './social-shair-routing.module';
import { SocialShairPage } from './social-shair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialShairPageRoutingModule
  ],
  declarations: [SocialShairPage]
})
export class SocialShairPageModule {}
