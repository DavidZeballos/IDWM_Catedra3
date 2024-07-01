import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoGameListComponent } from './components/video-game-list/video-game-list.component';
import { VideoGameCreateComponent } from './components/video-game-create/video-game-create.component';
import { VideoGameEditComponent } from './components/video-game-edit/video-game-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoGameListComponent,
    VideoGameCreateComponent,
    VideoGameEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
