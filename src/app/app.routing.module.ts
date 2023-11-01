import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoundListComponent } from "src/app/components/sound-list/sound-list.component";

const routes: Routes = [
  { path: '', component: SoundListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
