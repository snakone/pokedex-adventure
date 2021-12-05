import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerPage } from './trainer.page';

const routes: Routes = [
  {
    path: '',
    component: TrainerPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TrainerPageRouting {}
