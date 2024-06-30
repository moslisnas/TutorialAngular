import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    provideImgixLoader('https://github.com/'),
  ],
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet, NgOptimizedImage, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Barcelona';
  logoUrl = 'moslisnas.png';
  logoAlt = 'Angular logo';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
