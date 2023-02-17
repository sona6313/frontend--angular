import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-varify',
  templateUrl: './varify.component.html',
  styleUrls: ['./varify.component.scss']
})
export class VarifyComponent {

token:any;

constructor(private route:Router, private db:ServiceService,private Activeroute:ActivatedRoute){}

ngOnInit(): void {

this.token = this.Activeroute.snapshot.queryParamMap.get('token')

}

Varify(){
    

    this.db.Varify(this.token).subscribe((result:any) => {
      console.log(this.token);
        if(result) {
        
          alert(result.message);
          this.route.navigateByUrl('')

        }
      },
      (result) => {
        alert(result.error.message)
      }
    )
}

}
