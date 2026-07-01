import { Component, Input} from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-counts',
  standalone:true,
  imports: [],
  templateUrl: './counts.html',
  styleUrl: './counts.css',
})
export class Counts {
  total=0;
  task="";

  constructor(private route:ActivatedRoute) {}

  ngOnInit(){
    this.route.queryParams.subscribe(params=>{
      this.total = params['total'];
      this.task = params['task'];
    });
  }

}
