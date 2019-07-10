import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideUiComponent } from './side-ui/side-ui.component';
import { EmailUiComponent } from './email-ui/email-ui.component';
import { IndividualComponent } from './individual/individual.component';
import { MessageHighlightDirective } from './message-highlight.directive';
import { SearchHighlightDirective } from './search-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SideUiComponent,
    EmailUiComponent,
    IndividualComponent,
    MessageHighlightDirective,
    SearchHighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
