import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideUiComponent } from './side-ui/side-ui.component';
import { EmailUiComponent } from './email-ui/email-ui.component';
import { IndividualComponent } from './individual/individual.component';

@NgModule({
  declarations: [
    AppComponent,
    SideUiComponent,
    EmailUiComponent,
    IndividualComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
