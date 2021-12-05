import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'play',
        loadChildren: () => import('../play/play.module')
         .then(m => m.PlayPageModule)
      },
      {
        path: 'trainer',
        loadChildren: () => import('../trainer/trainer.module')
         .then(m => m.TrainerPageModule)
      },
      {
        path: '',
        redirectTo: '/home/play',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/play',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})

export class HomePageRouting {}
