import { Component, Input} from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-counts',
  standalone:true,
  imports: [],
  templateUrl: './counts.html',
  styleUrl: './counts.css',
})
export class Counts {
  constructor(public todoService: TodoService) {}

}
