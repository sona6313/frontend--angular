import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  resetform=this.fb.group({
    password:['',[Validators.required]]
  })

constructor(private activeroute:ActivatedRoute,private db:ServiceService,private fb:FormBuilder,){}
ngOnInit():void{

}
reset(){
  const token = this.activeroute.snapshot.queryParamMap.get('token')
console.log(token)


const password=this.resetform.value.password


if(this.resetform.valid){
  this.db.reset(token).subscribe((result:any)=>{
      if(result){
      alert(result.message);
      }(result:any)=> {
        alert(result.error.message)
      }
  })
}


}

}
