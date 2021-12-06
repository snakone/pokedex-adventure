import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@layout/layout.module';
import { PlayPage } from './play.page';
import { PlayRoutingModule } from './play.routing';

import { PlayActionsComponent } from './components/play-actions/play-actions.component';
import { PlayGameComponent } from './components/play-game/play-game.component';
import { PlayInfoComponent } from './components/play-info/play-info.component';
import { PlayMenuComponent } from './components/play-menu/play-menu.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    PlayRoutingModule,
    LayoutModule
  ],
  declarations: [
    PlayPage,
    PlayActionsComponent,
    PlayGameComponent,
    PlayInfoComponent,
    PlayMenuComponent
  ]
})

export class PlayPageModule {}
