import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css',
})
export class Show {
total : number=0;
task : string='';

constructor(private route : ActivatedRoute){}

ngOnInit(){
  this.route.queryParams.subscribe(params=>{
    this.total = params['total'];
    this.task = params['task'];
  });
}

}
