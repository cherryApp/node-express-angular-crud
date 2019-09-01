import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { IndexComponent } from './page/index/index.component';
import { NavComponent } from './nav/nav.component';
import { CreateUserComponent } from './page/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    IndexComponent,
    NavComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
