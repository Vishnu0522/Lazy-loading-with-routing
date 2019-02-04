import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './security/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'login', component:LoginComponent},
  { path: 'author', loadChildren: "../app/authors/authors.module#AuthorsModule", canActivate:[AuthGuard] },
  { path: 'reader', loadChildren: "../app/readers/readers.module#ReadersModule",canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  exports: [RouterModule, LoginComponent]
})
export class RoutingModule { }
