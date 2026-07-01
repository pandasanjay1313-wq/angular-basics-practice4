import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-inputs',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {
  //  task = '';
  
  // constructor(private todoService: TodoService) {}
  // add() {
  //   if (this.task.trim() !== '') {
  //     this.todoService.tasks.push(this.task);
  //     this.task = '';
  //   }
  // }
}
