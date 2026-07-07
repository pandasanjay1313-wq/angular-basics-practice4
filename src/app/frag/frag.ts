import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-frag',
  imports: [],
  templateUrl: './frag.html',
  styleUrl: './frag.css',
})
export class Frag {
  section: any;

  constructor(private route: ActivatedRoute){

    this.route.fragment.subscribe((res:any)=>{
      this.section = res;
    });
  }
}
