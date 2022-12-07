import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './common-components/login/login.component';
import { RegisterComponent } from './common-components/register/register.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { NoPermissionComponent } from './common-components/no-permission/no-permission.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPermissionComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
