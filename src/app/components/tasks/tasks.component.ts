import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // to use the service ,,define it in the constructor
  constructor(private taskService:TaskService) { }

  // to call the service use the ngon init cz it fires off on pageload
  ngOnInit(): void {
                                        // return val        from the observable asigns to the tasks var defined  in ln 11
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  }
  // subscribe is like a .then ,,setTask ,,in react does something after http request is done
  deleteTask(task:Task){
    this.taskService.deleteTask(task).subscribe(()=>(this.tasks=this.tasks.filter(t=>t.id !== task.id)));
  }
    toggleReminder(task:Task){
    task.reminder=!task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
   }

   addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(this.tasks.push(task)));
  }
   }

