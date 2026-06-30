import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inputs } from './inputs/inputs';
import { Lists } from './lists/lists';
import { Counts } from './counts/counts';
import { TodoService } from './todo.service';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,Inputs,Lists,Counts,RouterLink, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


}
  