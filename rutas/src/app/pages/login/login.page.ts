import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {

  constructor(private http: HttpClient) { }

  userInput: string = "";
  passInput: string = "";

  public onLogin(): void {
    this.http.post("http://localhost:8080/api/auth/login", {
      "user": this.userInput,
      "password": this.passInput
    }).subscribe({ 
      next: (response : any) => {
        console.log(response);
        localStorage.setItem("auth_token", response.token);
      },
      error: (error : any) => {
        console.log(error);
      }
    });
  }

  public onLogout(): void {
    localStorage.removeItem("auth_token");
  }

}
