import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayPage } from './play.page';
import { PlayRoutingModule } from './play.routing';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PlayRoutingModule
  ],
  declarations: [PlayPage]
})

export class PlayPageModule {}
