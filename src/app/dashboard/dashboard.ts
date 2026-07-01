import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Lists } from '../lists/lists';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink,Lists],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  
  showMessage(){
    alert('Dashboard button clicked');
  }
}
