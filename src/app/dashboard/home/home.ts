import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet,RouterLink,Profile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
