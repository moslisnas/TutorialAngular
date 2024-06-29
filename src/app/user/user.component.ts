import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { NgOptimizedImage, provideImgixLoader } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent, GamesComponent, NgOptimizedImage],
  providers: [
    provideImgixLoader('https://github.com/'),
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = "moslisnas";
  isLoggedIn = false; //<-- está funcionando como un estado
  favGame = '';
  logoUrl = 'moslisnas.png';
  logoAlt = 'Angular logo';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }
  
  greet(){
    alert("Hola!!!");
  }
}