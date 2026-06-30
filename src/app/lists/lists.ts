import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lists',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lists.html',
  styleUrl: './lists.css',
})
export class Lists {
 ///constructor(public todoService: TodoService) {}
    task = '';
  
  constructor(public todoService: TodoService) {}
  add() {
    if (this.task.trim() !== '') {
      this.todoService.tasks.push(this.task);
      this.task = '';
    }
  }
}
