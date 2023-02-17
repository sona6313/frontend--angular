import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  register(data:any){
    console.log(data);
    return this.http.post('http://localhost:3000/register',data);
  }
    login(data:any){
      console.log(data);
      return this.http.post('http://localhost:3000/login', data)
    }
  Varify(token:any){
    return this.http.get('http://localhost:3000/varify', {params:{token:token}})
  }

  forget(email:any){
    const mail = {
      email
    }
    return this.http.post('http://localhost:3000/Forget-password', mail)
  }

}

