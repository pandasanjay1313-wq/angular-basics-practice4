  import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
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

  constructor(private router : Router){}

  openSkip(){
    this.router.navigate(['skips'],{
      skipLocationChange:true
    });
  }

  openReplace(){
    this.router.navigate(['replace'],{
      replaceUrl: true  
    });
  }

//   openFrag() {
//   this.router.navigate(['frag'], {
//     fragment: 'details'
//   });
// }
}
