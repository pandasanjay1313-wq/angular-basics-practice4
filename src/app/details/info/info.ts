import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  imports: [],
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info {
  total: number=0;
  task : string='';
  ngOnInit(){
    const state = history.state;

    this.total = state.total;
    this.task = state.task;
  }
}
