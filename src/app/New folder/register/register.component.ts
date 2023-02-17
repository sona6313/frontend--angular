import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 

  constructor( private fb:FormBuilder,  private db:ServiceService, private http:HttpClient){}
  RegisterForm = this.fb.group({
    //form array
    name: ['', [Validators.required]],
    email: ['', [Validators.required, ]],
    password : ['', [Validators.required]],
    confirm: ['', [Validators.required]],
    num:['', [Validators.required]]
})

ngOnInit():void{

}



onSubmit(data:any){
  console.log(data)
  // console.log(this.RegisterForm.value)

        if(this. RegisterForm.valid){
          const result=this.db.register(data).subscribe((result:any)=> {
            alert(result.message)
          },(result)=>{
            alert(result.error.message);

          })
        }else{
          alert(`not valid`)
        }
}
}

