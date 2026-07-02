import { Component } from '@angular/core';
import { ActivatedRoute, Router,RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-setting',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './setting.html',
  styleUrl: './setting.css',
})
export class Setting {
  constructor(private router: Router, private route: ActivatedRoute){}

  openAbout(){
    this.router.navigate(['about'],{
      relativeTo: this.route,
      state:{
        name : 'sanjay',
        role :'frontend'
      }
    });
  }
}
