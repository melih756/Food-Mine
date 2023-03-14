import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './shared/models/Users';
import { ResponseModel } from './shared/models/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  addUser(user){
    let users=[];
    if(localStorage.getItem('Users')){
      users=JSON.parse(localStorage.getItem('Users'));
      users=[user, ...users];
      
    }else{
      users=[user]
    }
     localStorage.setItem('Users',JSON.stringify(user));
    }
}
