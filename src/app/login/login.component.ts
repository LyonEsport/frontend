import { Component } from '@angular/core';
import { UserService } from './user.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected form: FormGroup

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, Validators.email),
      password: new FormControl(null, Validators.required)
    })
  }

  verify(): void {
    const emailControl: AbstractControl | null = this.form.get('email');
    const passwordControl: AbstractControl | null = this.form.get('password');
    if (emailControl !== null && passwordControl !== null && emailControl.valid && passwordControl.valid) {
      this.userService.verify(emailControl.value, passwordControl.value).subscribe({
        next: () => console.log(response.statusCode), 
        error: () => console.log(response.statusCode)
      })
    }
  }
}
