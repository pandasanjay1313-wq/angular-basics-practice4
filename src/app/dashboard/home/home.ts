import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(private router : Router,private route : ActivatedRoute){}

  openProfile(){
    this.router.navigate(['profile'],{
    relativeTo: this.route,
    queryParams:{name :'sanjay',
      age:22}
    });
  }
}
