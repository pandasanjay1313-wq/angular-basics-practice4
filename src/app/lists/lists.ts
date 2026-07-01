import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Counts } from '../counts/counts';

@Component({
  selector: 'app-lists',
  standalone:true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
  task = '';
  tasks: string[] = [];
  constructor(private router: Router,private route: ActivatedRoute) {}
  add() {
    if (this.task.trim()) {
      this.tasks.push(this.task);
      this.task = '';
    }
  }
openCount(){

  this.router.navigate(['counts'],{
    relativeTo: this.route,
    queryParams:{total:5, task: 'angular'}
  });
}



  //   task = '';
  // ///list
  // constructor(public todoService: TodoService, private router: Router) {}
  // ///input
  // add() {
  //   if (this.task.trim() !== '') {
  //     this.todoService.tasks.push(this.task);
  //     this.task = '';
  //   }
  // }
}
