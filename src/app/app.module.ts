import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SideUiComponent } from './side-ui/side-ui.component';
import { EmailUiComponent } from './email-ui/email-ui.component';
import { IndividualComponent } from './individual/individual.component';
import { MessageHighlightDirective } from './message-highlight.directive';
import { SearchHighlightDirective } from './search-highlight.directive';
import { NewMessageFormComponent } from './new-message-form/new-message-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SideUiComponent,
    EmailUiComponent,
    IndividualComponent,
    MessageHighlightDirective,
    SearchHighlightDirective,
    NewMessageFormComponent,
    LoginFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
