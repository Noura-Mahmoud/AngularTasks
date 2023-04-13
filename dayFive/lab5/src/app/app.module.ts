import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './Components/error/error.component';
import { UsersComponent } from './Components/users/users.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import DeleteUserComponent from './Components/delete-user/delete-user.component'

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    UsersComponent,
    EditUserComponent,
    UserDetailsComponent,
    HeaderComponent,
    AddUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
