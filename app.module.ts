import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './New folder/loginpage/loginpage.component';
import { RegisterComponent } from './New folder/register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { ResetComponent } from './New folder/reset/reset.component';
import { VarifyComponent } from './New folder/varify/varify.component';
import { ForgetpaswordComponent } from './New folder/forgetpasword/forgetpasword.component';
import { DashboardComponent } from './New folder/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterComponent,
    ResetComponent,
    VarifyComponent,
    ForgetpaswordComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
