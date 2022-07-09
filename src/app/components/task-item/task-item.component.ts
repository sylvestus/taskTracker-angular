import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task;
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task: any){
   this.onDeleteTask.emit(task)
  }
  onToggle(task:Task){
    this.onToggleReminder.emit(task)
}
}