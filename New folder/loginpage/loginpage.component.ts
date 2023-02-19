import { Component } from '@angular/core';
import { FormGroup , FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {

  constructor(private fb:FormBuilder, private db:ServiceService, private route:Router){}
  loginForm = this.fb.group({
    //form array
    name: ['', [Validators.required ]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
   
})

ngonInit(): void {
  
}

  onSubmit(data:any){
    console.log(this.loginForm)
          if(this.loginForm.valid){
            this.db.login(data).subscribe((result:any)=> {
              alert(result.message)

            },(result)=>{
              alert(result.error.message);
              this.route.navigateByUrl('dashboard');
            }
            )
         
  }
}

}

