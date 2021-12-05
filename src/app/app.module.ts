import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SemaphoreComponent } from './semaphore/semaphore.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaphoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
