import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: any = {
    "username": "",
    "password": ""
  };

  http = inject(HttpClient);
  router = inject(Router);

  onLogin() {
    debugger;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // 測試用
    });

    this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        localStorage.setItem('employee', JSON.stringify(res.data));
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message)
      }
    })
  }

}
