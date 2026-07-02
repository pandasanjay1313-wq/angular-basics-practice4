import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name='';
  role='';

  ngOnInit(){
    this.name= history.state.name;
    this.role= history.state.role;
  }
}
