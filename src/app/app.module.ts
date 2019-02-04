import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './auth.guard';
import { ComponentInteractionService } from './service/component-interaction.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, ComponentInteractionService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
