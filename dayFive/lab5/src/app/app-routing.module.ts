import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Components/users/users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';
import DeleteUserComponent from './Components/delete-user/delete-user.component';
import { AddUserComponent } from './Components/add-user/add-user.component';

const routes: Routes = [
  {path:"", component:UsersComponent},
  {path:"users", component:UsersComponent},
  {path:"users/:id", component:UserDetailsComponent},
  {path:"addUser", component:AddUserComponent},
  {path:"editUser/:id", component:EditUserComponent},
  {path:"deleteUser/:id", component:DeleteUserComponent},
  {path:"**", component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
