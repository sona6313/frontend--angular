import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './New folder/dashboard/dashboard.component';
import { ForgetpaswordComponent } from './New folder/forgetpasword/forgetpasword.component';
import { LoginpageComponent } from './New folder/loginpage/loginpage.component';
import { RegisterComponent } from './New folder/register/register.component';
import { ResetComponent } from './New folder/reset/reset.component';
import { VarifyComponent } from './New folder/varify/varify.component';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'reset',component:ResetComponent},
  {path:'varify',component:VarifyComponent},
{path:'forget',component:ForgetpaswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
