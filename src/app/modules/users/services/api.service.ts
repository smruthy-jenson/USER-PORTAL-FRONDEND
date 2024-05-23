import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userModel } from '../users.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  server_url="https://user-portal-lktg.onrender.com"
  constructor(private http:HttpClient) { }

  saveUserAPI(user:userModel){
    return this.http.post(`${this.server_url}/users`,user)
  }

  getAllUsersAPI(){
    return this.http.get(`${this.server_url}/users`)
  }

  getAllUserAPI(id:any){
    return this.http.get(`${this.server_url}/users/${id}`)
  }

  updateUserAPI(user:userModel){
    return this.http.put(`${this.server_url}/users/${user.id}`,user)
  }

  removeUserAPI(id:any){
    return this.http.delete(`${this.server_url}/users/${id}`)
  }
}
