import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockedPicturesComponent } from '../blocked-pictures.component';

const routes: Routes = [{
  path : '',
  component:BlockedPicturesComponent,
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockedPicturesRoutingModule { }
