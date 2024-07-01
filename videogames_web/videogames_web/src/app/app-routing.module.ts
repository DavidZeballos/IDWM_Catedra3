import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGameListComponent } from './components/video-game-list/video-game-list.component';
import { VideoGameCreateComponent } from './components/video-game-create/video-game-create.component';
import { VideoGameEditComponent } from './components/video-game-edit/video-game-edit.component';

const routes: Routes = [
  { path: '', component: VideoGameListComponent },
  { path: 'create', component: VideoGameCreateComponent },
  { path: 'edit/:id', component: VideoGameEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
