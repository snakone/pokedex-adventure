import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainerPage } from './trainer.page';
import { TrainerPageRouting } from './trainer.routing';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TrainerPageRouting
  ],
  declarations: [TrainerPage]
})

export class TrainerPageModule {}
