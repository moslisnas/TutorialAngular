import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    provideImgixLoader('https://github.com/'),
  ],
  imports: [UserComponent, CommentsComponent, NgOptimizedImage, RouterLink, RouterOutlet, FormsModule, ReactiveFormsModule, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Barcelona';
  logoUrl = 'moslisnas.png';
  logoAlt = 'Angular logo';
  favoriteFramework = '';
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  display = '';
  carService = inject(CarService);
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';

  constructor(private carServiceDI: CarService) {
    this.display = this.carServiceDI.getCars().join(' ⭐️ ');
}

  showFramework() {
    alert(this.favoriteFramework);
  }
  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
