import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Users } from '../shared/models/Users';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit{

  
  

  ngOnInit(){
  //  this.registerform=new this.registerform({
  //   username:new FormControl(null,Validators.required),
  //   email:new FormControl(null,[Validators.required,Validators.email]),
  //   password:new FormControl(null,[Validators.required,Validators.minLength(8)])
  //  })
    this.createregister();
  }
  user:any={};
  registerform!:FormGroup; 
  constructor(private fb:FormBuilder,private userservice:UsersService){

  }

 createregister(){
  this.registerform=this.fb.group({
    username:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)])
  })
 }

 get username(){
  return this.registerform.get('username') as FormControl
 }
 onSubmit(){
  console.log(this.registerform.value);
  this.user=Object.assign(this.user,this.registerform.value);
  this.userservice.addUser(this.user);
 
 }


 
 
}
