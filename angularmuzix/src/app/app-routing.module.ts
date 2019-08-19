import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ TrackcardComponent } from './components/trackcard/trackcard.component';
import { Trackcard2Component } from './components/trackcard2/trackcard2.component';

const routes: Routes = [

  {
    path : 'track/:searchString',
    component:TrackcardComponent
  },
  {
    path : 'playList',
    component :Trackcard2Component
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
