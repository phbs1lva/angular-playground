import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
