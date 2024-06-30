import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule, GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  username = "moslisnas";
  isLoggedIn = false; //<-- está funcionando como un estado
  favGame = '';
  favoriteFramework = '';

  getFavorite(gameName: string){
    this.favGame = gameName;
  }
  
  greet(){
    alert("Hola!!!");
  }
  
  showFramework() {
    alert(this.favoriteFramework);
  }
}