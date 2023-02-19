import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-forgetpasword',
  templateUrl: './forgetpasword.component.html',
  styleUrls: ['./forgetpasword.component.scss']
})
export class ForgetpaswordComponent {

  constructor( private fb:FormBuilder,  private db:ServiceService, private http:HttpClient,private route:Router,){}
  
  forgetForm =this.fb.group({
    email: ['',[Validators.required]]
  })

  forgetpassword(){
const email = this.forgetForm.value.email
   if(this.forgetForm.valid){
    this.db.forget(email).subscribe(
      (result:any)=> {
        if(result){
          alert(result.message)
          this.route.navigateByUrl('reset')
        }
        (result:any) => {
          alert(result.error.message)
        }
    
    }
  
  )}
}}