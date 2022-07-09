import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> =new EventEmitter()
  // all form field properties,,,,
  text: string
  day: string
  reminder: boolean = false

  showAddTask: boolean
  subscription:Subscription

  // to bind these properties to form field data use ngmodel dirrective which is par of form module so import to the app.moduels before using  

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text||!this.day){
      alert('please fill in the blank before sumbmiting')
      return;
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder 
    }
   this.onAddTask.emit(newTask)

    // clear the form
    this.text="";
    this.day="";
    this.reminder=false;
  }
}
