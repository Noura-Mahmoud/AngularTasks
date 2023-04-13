import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private readonly myclient: HttpClient) { }
  private URL = "http://localhost:3000/users"; //link to fake server of ur data

  getAllUsers(){
    return this.myclient.get(this.URL);
  }

  getUserById(id:any){
    return this.myclient.get(this.URL+'/'+id);
  }

  AddNewUder(user:any){
    return this.myclient.post(this.URL, user);
  }

  UpdateUser(id:any, user:any){
    return this.myclient.put(this.URL+'/'+id , user);
  }

  DeleteUser(id:any){
    return this.myclient.delete(this.URL+'/'+id);
  }
}
